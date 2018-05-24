import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* Navbar */
    window.addEventListener('scroll', function (event) {
      const scroll = this.scrollY;
      if (scroll === 0) {
        document.getElementById('changecolor').style.backgroundColor = 'transparent';
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
        document.getElementById('changecolor').style.borderBottom = '2px solid gray';
        document.getElementById('textcolor1').style.color = 'black';
        document.getElementById('textcolor2').style.color = 'black';
        document.getElementById('textcolor3').style.color = 'black';
        document.getElementById('textcolor4').style.color = 'black';
        document.getElementById('textcolor5').style.color = 'black';
        document.getElementById('textcolor6').style.color = 'black';
      }
    }); /*Fin de la navbar */
  }

}
