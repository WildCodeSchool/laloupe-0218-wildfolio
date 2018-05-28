import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  cities = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCity();
    /* Navbar */
    window.addEventListener('scroll', function (event) {
      const scroll = this.scrollY;
      if (scroll === 0) {
        document.getElementById('changecolor').style.backgroundColor = 'transparent';
        document.getElementById('changecolor').style.borderBottom = 'transparent';
        document.getElementById('textcolor1').style.backgroundColor = 'transparent';
        document.getElementById('textcolor2').style.backgroundColor = 'transparent';
        document.getElementById('textcolor3').style.backgroundColor = 'transparent';
        document.getElementById('textcolor4').style.backgroundColor = 'transparent';
        document.getElementById('textcolor5').style.backgroundColor = 'transparent';
        document.getElementById('textcolor6').style.backgroundColor = 'transparent';

        document.getElementById('textcolor1').style.color = 'white';
        document.getElementById('textcolor2').style.color = 'white';
        document.getElementById('textcolor3').style.color = 'white';
        document.getElementById('textcolor4').style.color = 'white';
        document.getElementById('textcolor5').style.color = 'white';
        document.getElementById('textcolor6').style.color = 'white';
      } else {
        document.getElementById('changecolor').style.backgroundColor = 'white';
        document.getElementById('changecolor').style.borderBottom = '1px solid gray';
        document.getElementById('textcolor1').style.color = 'black';
        document.getElementById('textcolor2').style.color = 'black';
        document.getElementById('textcolor3').style.color = 'black';
        document.getElementById('textcolor4').style.color = 'black';
        document.getElementById('textcolor5').style.color = 'black';
        document.getElementById('textcolor6').style.color = 'black';
      }
    }); /*Fin de la navbar */
  }

  getCity() {
    this.cityService.getCities().subscribe(
      (data) => {
        console.log(data);
        this.cities = data.sort((a, b) => {
          if (a.name < b.name) { return - 1 ; }
          if (a.name > b.name) { return 1 ; }
          return 0;
        });
      },
    );
  }
}
