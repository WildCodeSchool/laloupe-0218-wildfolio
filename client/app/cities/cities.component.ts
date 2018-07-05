import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CityService } from '../services/city.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { City } from '../shared/models/city.model';
import { WcsService } from '../wcs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  city = new City();
  cities: City[] = [];
  isLoading = true;
  isEditing = false;
  me;
  addCityForm: FormGroup;
  link = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  locationId = new FormControl('', Validators.required);

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private wcsService: WcsService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.getMe();
    // this.addCityByStudentName();
    this.getCity();
    this.addCityForm = this.formBuilder.group({
      link: this.link,
      name: this.name,
      locationId: this.locationId,
    });
  }
  // getMe() {
  //   this.studentService.getMe().subscribe(
  //     (data) => {
  //       this.me = data,
  //       console.log(this.me);
  //     },
  //     error => console.log(error),
  //     () => this.isLoading = false,
  // );
  // }
  getCity() {
    this.cityService.getCities().subscribe(
      (data) => {
        console.log(data);
        this.cities = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }

  // addCityByStudentName() {
  //   this.studentService.getMe().subscribe((me) => {
  //     console.log(me.campus);
  //     this.addCityForm.value.name = me.campus;
  //     this.addCityForm.value.locationId = me.locationId;
  //     this.cityService.addIfNotExist(this.addCityForm.value).subscribe(
  //       (res) => {
  //         // this.cities.push(res);
  //         this.addCityForm.reset();
  //         this.toast.setMessage('item added successfully.', 'success');
  //         this.getCity();
  //       },
  //       error => console.log(error),
  //     );
  //   });
  // }

  // addCity() {
  //   if (this.canAddCity()) {
  //     this.cityService.addCity(this.addCityForm.value).subscribe(
  //       (res) => {
  //         this.cities.push(res);
  //         this.addCityForm.reset();
  //         this.toast.setMessage('item added successfully.', 'success');
  //       },
  //       error => console.log(error),
  //     );
  //   } else {
  //     this.addCityForm.reset();
  //     this.toast.setMessage('campus already exist.', 'warning');
  //   }
  // }

  enableEditing(city: City) {
    this.isEditing = true;
    this.city = city;
  }

  cancelEditing() {
    this.isEditing = false;
    this.city = new City();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCity();
  }

  editCity(city: City) {
    this.cityService.editCity(city).subscribe(
      () => {
        this.isEditing = false;
        this.city = city;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteCity(city: City) {
    if (
      window.confirm('Are you sure you want to permanently delete this item?')
    ) {
      this.cityService.deleteCity(city).subscribe(
        () => {
          const pos = this.cities.map(elem => elem._id).indexOf(city._id);
          this.cities.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  canAddCity() {
    for (let i = 0; i < this.cities.length; i += 1) {
      if (this.cities[i].city === this.addCityForm.value.name) {
        return false;
      }
    }
    return true;
  }

}
