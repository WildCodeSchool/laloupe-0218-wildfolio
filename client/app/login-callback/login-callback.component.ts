import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { Student } from '../shared/models/student.model';
import { Location } from '../shared/models/location.model';
import { StudentService } from '../services/student.service';
import { CityService } from '../services/city.service';
import { LangageService } from '../services/langage.service';
import { Langage } from '../shared/models/langage.model';
import { City } from '../shared/models/city.model';
import { SessionService } from '../services/session.service';
import { Session } from '../shared/models/session.model';

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
    private cityService: CityService,
    private sessionService: SessionService,
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
      const city = new City();
      const langage = new Langage();
      const session = new Session();
      student.name = data['firstname'];
      student.admin = data['admin'];
      student.lastname = data['lastname'];
      student.email = data['email'];
      student.WCS_ID = data['id'];
      student.github = data['github'];
      /* student.banished = data['banished']; */
      // student.members = data['current_crew'].users;
      city.city = data['current_crew'].location.city;
      city.WCS_ID = data['current_crew'].location.id;
      langage.name = data['current_crew'].program_type.name;
      langage.WCS_ID = data['current_crew'].program_type.id;
      session.date = data['current_crew'].name;
      session.WCS_ID = data['current_crew'].id;
      session.locationId = city.WCS_ID;
      student.langageId = langage.WCS_ID;
      this.students = student;
      // console.log(this.students);
      this.langageService.addIfNotExist(langage).subscribe(
        (res) => {
          console.log(res);
          this.sessionService.addIfNotExist(session).subscribe(
            () => {
              console.log(res);
              this.cityService.addIfNotExist(city).subscribe(
                () => {
                  /*  console.log(res); */
                  data['current_crew'].users.forEach(async (studt) => {
                    studt.WCS_ID = studt['id'];
                    studt.name = studt.fullname;
                    studt.locationId = city.WCS_ID;
                    studt.campus = city.city;
                    studt.session = session.date;
                    studt.admin = studt['admin'];
                    studt.sessionId = session.WCS_ID;
                    studt.langageName = langage.name;
                    studt.langageId = langage.WCS_ID;
                    delete studt.lastname;
                    delete studt.id;
                    await this.studentService.addStudentIfNotExists(studt).subscribe(
                      () => {
                        /*  console.log('add user', student); */
                      },
                      error => console.log(error),
                    );
                  });
                  this.studentService.addStudentIfNotExists(student).subscribe(
                    () => {
                      student.locationId = city.WCS_ID;
                      student.campus = city.city;
                      student.session = session.date;
                      student.sessionId = session.WCS_ID;
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
    });
  }
}
