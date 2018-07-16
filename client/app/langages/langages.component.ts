import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LangageService } from '../services/langage.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Langage } from '../shared/models/langage.model';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.css'],
})

export class LangagesComponent implements OnInit {

  newLangage: Langage = new Langage();
  langage = new Langage();
  langages: Langage[] = [];
  isLoading = true;
  isEditing = false;
  edit = false;

  addLangageForm: FormGroup;
  name = new FormControl('');
  WCS_ID = new FormControl('');

  constructor(
    private langageService: LangageService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private wcsService: WcsService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.getLangage();
    this.addLangageForm = this.formBuilder.group({
      name: this.name,
      WCS_ID: this.WCS_ID,
    });
  }

  getLangage() {
    this.langageService.getLangages().subscribe(
      (data) => {
        // console.log(data);
        this.langages = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }

  addLangage() {
    if (this.canAddLangage()) {
      this.langageService.addLangage(this.addLangageForm.value).subscribe(
      (res) => {
        this.langages.push(res);
        this.addLangageForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
      );
    } else {
      this.addLangageForm.reset();
      this.toast.setMessage('campus already exist.', 'warning');
    }
  }

  enableEditing(langage: Langage) {
    this.isEditing = true;
    this.langage = langage;
  }

  cancelEditing() {
    this.isEditing = false;
    this.langage = new Langage();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getLangage();
  }

  editLangage(langage: Langage) {
    this.langageService.editLangage(langage).subscribe(
      () => {
        this.isEditing = false;
        this.langage = langage;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteLangage(langage: Langage) {
    if (
      window.confirm('Are you sure you want to permanently delete this item?')
    ) {
      this.langageService.deleteLangage(langage).subscribe(
        () => {
          const pos = this.langages.map(elem => elem._id).indexOf(langage._id);
          this.langages.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  canAddLangage() {
    for (let i = 0; i < this.langages.length; i += 1) {
      if (this.langages[i].name === this.addLangageForm.value.name) {
        return false;
      }
    }
    return true;
  }

}
