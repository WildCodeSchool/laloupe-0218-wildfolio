import { HttpClient } from '@angular/common/http';
import { StudentService } from './../services/student.service';
import { Student } from '../shared/models/student.model';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  cities = [];
  isconnect = false;
  isLoading = true;
  isEditing = false;
  students: Student[];

  constructor(
    private cityService: CityService,
    private studentService: StudentService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.checkConnect();
    this.getCity();
    /* Navbar */
    // tslint:disable-next-line:no-this-assignment
    const self = this;
    window.addEventListener('scroll', function (event) {
      const scroll = this.scrollY;
      if (scroll === 0) {
        document.getElementById('changecolor').style.opacity = '0.8';
        document.getElementById('changecolor').style.backgroundColor = 'black';
        document.getElementById('changecolor').style.borderBottom =
          'transparent';
        document.getElementById('textcolor1').style.backgroundColor =
          'transparent';
        document.getElementById('textcolor2').style.backgroundColor =
          'transparent';
        document.getElementById('textcolor3').style.backgroundColor =
          'transparent';
        document.getElementById('textcolor4').style.backgroundColor =
          'transparent';
        document.getElementById('textcolor5').style.backgroundColor =
          'transparent';
        if (self.isconnect) {
          document.getElementById('textcolor6').style.backgroundColor =
            'transparent';
          document.getElementById('textcolor7').style.backgroundColor =
            'transparent';
        } else {
          document.getElementById('textcolor8').style.backgroundColor =
            'transparent';
        }
        document.getElementById('textcolor1').style.color = 'white';
        document.getElementById('textcolor2').style.color = 'white';
        document.getElementById('textcolor3').style.color = 'white';
        document.getElementById('textcolor4').style.color = 'white';
        document.getElementById('textcolor5').style.color = 'white';
        if (self.isconnect) {
          document.getElementById('textcolor6').style.color = 'white';
          document.getElementById('textcolor7').style.color = 'white';
        } else {
          document.getElementById('textcolor8').style.color = 'white';
        }
      } else {
        document.getElementById('changecolor').style.opacity = '1';
        document.getElementById('changecolor').style.backgroundColor = 'white';
        document.getElementById('changecolor').style.borderBottom =
          '1px solid gray';
        document.getElementById('textcolor1').style.color = 'black';
        document.getElementById('textcolor2').style.color = 'black';
        document.getElementById('textcolor3').style.color = 'black';
        document.getElementById('textcolor4').style.color = 'black';
        document.getElementById('textcolor5').style.color = 'black';
        if (self.isconnect) {
          document.getElementById('textcolor6').style.color = 'black';
          document.getElementById('textcolor7').style.color = 'black';
        } else {
          document.getElementById('textcolor8').style.color = 'black';
        }
      }
    }); /*Fin de la navbar */
  }

  logout() {
    localStorage.clear();
    return this.isconnect = false;
  }

  checkConnect() {
    if (localStorage.getItem('token_wcs')) {
      return this.isconnect = true;
    }  {
      console.log('No');
    }
  }
  getCity() {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data.sort((a, b) => {
        if (a.city < b.city) {
          return -1;
        }
        if (a.city > b.city) {
          return 1;
        }
        return 0;
      });
    });
  }
}
