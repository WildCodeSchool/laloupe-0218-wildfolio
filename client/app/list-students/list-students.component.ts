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
  langage = new Langage();
  langages: Langage[] = [];
  isLoading = true;
  isEditing = false;
  selectedLangage: any;
<<<<<<< HEAD
  langageName: any[] = [{name: "select"}];
=======
  isSearched = localStorage.getItem('selectedLangage');
>>>>>>> b62baa533ba28a1534468b7568510ffd389ead0d

  constructor(private studentService: StudentService, private langageService: LangageService) { }

  ngOnInit() {
    /* this.getStudent(); */
    this.getLangage();
    this.getLangageBySelectedLangage();
    console.log(this.isSearched);
  }

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log(data);
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
        console.log(data);
        this.langages = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }

  getLangageById() {
    this.studentService.getLangageById(this.selectedLangage).subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  getLangageBySelectedLangage() {
    this.studentService.getLangageById(Number(this.isSearched)).subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }

  showProject() {
    this.getLangageById();
  }
}
