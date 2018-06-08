import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students: Student[];
  isLoading = true;
  isEditing = false;
  
  constructor(private studentService: StudentService) { }



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
}
