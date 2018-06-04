import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityService } from '../services/city.service';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  cities = [];
  students: Student;

  constructor(private cityService: CityService, private wcsService: WcsService, private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCity();
    /* Navbar */
    window.addEventListener('scroll', function (event) {
      const scroll = this.scrollY;
      if (scroll === 0) {
        document.getElementById('changecolor').style.opacity = '0.8';
        document.getElementById('changecolor').style.backgroundColor = 'black';
        document.getElementById('changecolor').style.borderBottom = 'transparent';
        document.getElementById('textcolor1').style.backgroundColor = 'transparent';
        document.getElementById('textcolor2').style.backgroundColor = 'transparent';
        document.getElementById('textcolor3').style.backgroundColor = 'transparent';
        document.getElementById('textcolor4').style.backgroundColor = 'transparent';
        document.getElementById('textcolor5').style.backgroundColor = 'transparent';
        document.getElementById('textcolor6').style.backgroundColor = 'transparent';
        document.getElementById('textcolor7').style.backgroundColor = 'transparent';

        document.getElementById('textcolor1').style.color = 'white';
        document.getElementById('textcolor2').style.color = 'white';
        document.getElementById('textcolor3').style.color = 'white';
        document.getElementById('textcolor4').style.color = 'white';
        document.getElementById('textcolor5').style.color = 'white';
        document.getElementById('textcolor6').style.color = 'white';
        document.getElementById('textcolor7').style.color = 'white';
      } else {
        document.getElementById('changecolor').style.opacity = '1';
        document.getElementById('changecolor').style.backgroundColor = 'white';
        document.getElementById('changecolor').style.borderBottom = '1px solid gray';
        document.getElementById('textcolor1').style.color = 'black';
        document.getElementById('textcolor2').style.color = 'black';
        document.getElementById('textcolor3').style.color = 'black';
        document.getElementById('textcolor4').style.color = 'black';
        document.getElementById('textcolor5').style.color = 'black';
        document.getElementById('textcolor6').style.color = 'black';
        document.getElementById('textcolor7').style.color = 'black';
      }
    }); /*Fin de la navbar */
  }

  getCity() {
    this.cityService.getCities().subscribe(
      (data) => {
        this.cities = data.sort((a, b) => {
          if (a.name < b.name) { return - 1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      },
    );
  }

 /*  getStudent() {
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
    });
  } */

}
