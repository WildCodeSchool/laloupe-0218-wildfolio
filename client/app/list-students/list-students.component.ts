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
  isLoading = true;
  isEditing = false;
  // selectedLangageId: any;

  constructor(private studentService: StudentService, private langageService: LangageService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  // getStudentByLangage() {
  //   this.studentService.getStudentsByLangage(this.selectedLangageId).subscribe(
  //     (data) => {
  //       this.students = data;
  //       console.log(data);
  //     },
  //     error => console.log(error),
  //     () => this.isLoading = false,
  //   );
  // }
}
