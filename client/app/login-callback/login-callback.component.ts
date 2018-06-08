import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css'],
})
export class LoginCallbackComponent implements OnInit {

  students: Student;

  constructor(
    private route: ActivatedRoute,
    private wcsService: WcsService,
    private router: Router,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
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
      this.students = student
      this.studentService.addStudentIfNotExists(student).subscribe(
        (res) => {
          console.log('ok');
        },
        error => console.log(error),
      );
      this.router.navigate(['/']);
    });
  }
}
