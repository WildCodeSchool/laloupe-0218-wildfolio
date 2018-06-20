import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';
import { LocationService } from '../services/location.service';

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
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token_wcs', token);
    this.wcsService.getMe().subscribe((data) => {
      this.wcsService.student = data;
      const student = new Student();
      student.name = data['firstname'];
      student.lastname = data['lastname'];
      student.email = data['email'];
      student.WCS_ID = data['id'];
      student.github = data['github'];
      student.admin = data['admin'];
      student.banished = data['banished'];
      /* student.crew = data['current_crew']; */
      student.members = data['current_crew'].users;
      console.log(student);
      this.students = student;
      // this.locationService.addLocationIfNotExist(data['current_crew'].location).subscribe(
      //  (res) => {
      //   console.log('loc save');
      // },
      // error => console.log(error)});
      this.studentService.addStudentIfNotExists(student).subscribe(
        (res) => {
          console.log('connecter');
        },
        error => console.log(error),
      );
      this.router.navigate(['/']);
    });
  }
}
