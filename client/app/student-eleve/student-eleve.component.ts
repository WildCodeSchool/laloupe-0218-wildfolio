import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-eleve',
  templateUrl: './student-eleve.component.html',
  styleUrls: ['./student-eleve.component.css'],
})
export class StudentEleveComponent implements OnInit {

  student: Student;
  id: string;

  constructor(private wcsService: WcsService, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'),
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent(this.id).subscribe(
      (data) => {
        this.student = data;
      },
    );
  }

  /* getStudent() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.getItem('token_wcs');
    this.wcsService.getMe().subscribe((data) => {
      this.wcsService.student = data;
      console.log(data);
      const student = new Student();
      student.name = data['firstname'];
      student.lastname = data['lastname'];
      student.email = data['email'];
      student.WCS_ID = data['id'];
      student.github = data['github'];
      student.admin = data['admin'];
      student.banished = data['banished'];
      student.crew = data['current_crew'];
      console.log(student);
      this.students = student;
    });
  } */
}
