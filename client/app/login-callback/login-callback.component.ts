import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { Student } from '../shared/models/student.model';
import { Location } from '../shared/models/location.model';
import { StudentService } from '../services/student.service';
import { LocationService } from '../services/location.service';
import { LangageService } from '../services/langage.service';
import { Langage } from '../shared/models/langage.model';

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
    private langageService: LangageService,
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token_wcs', token);
    this.wcsService.getMe().subscribe((data) => {
      localStorage.setItem('WCS_ID', data['id']);
      this.wcsService.student = data;
      console.log(this.wcsService.student);
      const student = new Student();
      const location = new Location();
      const langage = new Langage();
      student.name = data['firstname'];
      student.admin = data['admin'];
      student.lastname = data['lastname'];
      student.email = data['email'];
      student.WCS_ID = data['id'];
      student.github = data['github'];
      /* student.banished = data['banished']; */
      // student.members = data['current_crew'].users;
      location.city = data['current_crew'].location.city;
      location.WCS_ID = data['current_crew'].location.id;
      langage.name = data['current_crew'].program_type.name;
      langage.WCS_ID = data['current_crew'].program_type.id;
      student.langageId = langage.WCS_ID;
      this.students = student;
      // console.log(this.students);
      this.langageService.addIfNotExist(langage).subscribe(
        (res) => {
          this.locationService.addIfNotExist(location).subscribe(
        (res) => {
          /*  console.log(res); */
          data['current_crew'].users.forEach(async (studt) => {
            studt.WCS_ID = studt['id'];
            studt.name = studt.fullname;
            studt.locationId = location.WCS_ID;
            studt.campus = location.city;
            studt.session = data['current_crew'].name;
            studt.admin = studt['admin'];
            studt.sessionId = data['current_crew'].id;
            studt.langageName = langage.name;
            studt.langageId = langage.WCS_ID;
            delete studt.lastname;
            delete studt.id;
            await this.studentService.addStudentIfNotExists(studt).subscribe(
              (res) => {
                /*  console.log('add user', student); */
              },
              error => console.log(error),
            );
          });
          this.studentService.addStudentIfNotExists(student).subscribe(
            (res) => {
              student.locationId = location.WCS_ID;
              student.campus = location.city;
              student.session = data['current_crew'].name;
              student.sessionId = data['current_crew'].id;
              student.langageName = langage.name;
              student.langageId = langage.WCS_ID;
              /*  console.log('connecter'); */
            },
            error => console.log(error),
          );
          this.router.navigate(['/']);
        });
        });
    });
  }
}
