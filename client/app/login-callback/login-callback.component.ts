import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { Student } from '../shared/models/student.model';
import { Location } from '../shared/models/location.model';
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
    private locationService: LocationService,
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token_wcs', token);
    this.wcsService.getMe().subscribe((data) => {
      this.wcsService.student = data;
      const student = new Student();
      const location = new Location();
      student.name = data['firstname'];
      student.lastname = data['lastname'];
      student.email = data['email'];
      student.WCS_ID = data['id'];
      student.github = data['github'];
      student.admin = data['admin'];
      student.banished = data['banished'];
      // student.members = data['current_crew'].users;
      location.city = data['current_crew'].location.city;
      location.WCS_ID = data['current_crew'].location.id;
      this.students = student;
      this.locationService.addIfNotExist(location).subscribe(
        (res) => {
          console.log(res);
        });
      data['current_crew'].users.forEach(async student => {
        await this.studentService.addStudentIfNotExists(student).subscribe(
          (res) => {
            console.log('add user', res);
          },
          error => console.log(error),
        );
      });
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
