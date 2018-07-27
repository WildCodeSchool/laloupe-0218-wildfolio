import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';
import { LangageService } from '../services/langage.service';
import { Langage } from '../shared/models/langage.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})

export class ListStudentsComponent implements OnInit {
  students: Student[];
  selectedLangage: any = -1;
  langage = new Langage();
  langages: Langage[] = [];
  isLoading = true;
  isEditing = false;
  isSearched = localStorage.getItem('selectedLangage');

  constructor(private studentService: StudentService, private langageService: LangageService) { }

  ngOnInit() {
    /* this.getStudent(); */
    this.getLangage();
    this.getLangageBySelectedLangage();
    this.getLangageById();
    // console.log(this.isSearched);
  }
  // getCity() {
  //   this.cityService.getCities().subscribe((data) => {
  //     this.cities = data.sort((a, b) => {
  //       if (a.city < b.city) {
  //         return -1;
  //       }
  //       if (a.city > b.city) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   });
  // }
  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        // console.log(data);
        this.getLangageBySelectedLangage();
        this.students = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
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

  getLangageById() {
    this.studentService.getLangageById(this.selectedLangage).subscribe(
      (data) => {
        this.students = data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.students = data;
        // console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  getLangageBySelectedLangage() {
    this.studentService.getLangageById(Number(this.isSearched)).subscribe(
      (data) => {
        this.students = data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        // console.log(data);
        this.students = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }
/* Vous êtes beaux */
  showProject() {
    this.getLangageById();
  }
}
