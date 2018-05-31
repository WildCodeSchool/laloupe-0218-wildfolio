import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { RecrutService } from '../services/recrut.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Recrut } from '../shared/models/recrut.model';

@Component({
  selector: 'app-recruts',
  templateUrl: './recruts.component.html',
  styleUrls: ['./recruts.component.css'],
})
export class RecrutsComponent implements OnInit {

  recrut = new Recrut();
  recruts: Recrut[] = [];
  isLoading = true;
  isEditing = false;

  addRecrutForm: FormGroup;
  authname = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);

  constructor(private recrutService: RecrutService, private formBuilder: FormBuilder, public toast: ToastComponent) { }

  ngOnInit() {
    this.getRecrut();
    this.addRecrutForm = this.formBuilder.group({
      authname: this.authname,
      description: this.description,
    });
  }

  getRecrut() {
    this.recrutService.getRecruts().subscribe(
      (data) => {
        console.log(data);
        this.recruts = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addRecrut() {
    if (this.canAddRecrut() && this.recruts.length < 3) {
      this.recrutService.addRecrut(this.addRecrutForm.value).subscribe(
        (res) => {
          this.recruts.push(res);
          this.addRecrutForm.reset();
          this.toast.setMessage('item added successfully.', 'success');
        },
        error => console.log(error),
      );
    } else {
      this.addRecrutForm.reset();
      this.toast.setMessage('campus already exist.', 'warning');
    }
  }

  enableEditing(recrut: Recrut) {
    this.isEditing = true;
    this.recrut = recrut;
  }

  cancelEditing() {
    this.isEditing = false;
    this.recrut = new Recrut();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getRecrut();
  }

  editRecrut(recrut: Recrut) {
    this.recrutService.editRecrut(recrut).subscribe(
      () => {
        this.isEditing = false;
        this.recrut = recrut;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteRecrut(recrut: Recrut) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.recrutService.deleteRecrut(recrut).subscribe(
        () => {
          const pos = this.recruts.map(elem => elem._id).indexOf(recrut._id);
          this.recruts.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  canAddRecrut() {
    for (let i = 0; i < this.recruts.length; i++) {
      if (this.recruts[i].authname === this.addRecrutForm.value.authname) {
        return false;
      }
    }
    return true;
  }
}
