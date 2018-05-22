import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', function (event) {
      const scroll = this.scrollY;
      if (scroll === 0) {
        document.getElementById('changecolor').style.backgroundColor = 'transparent';
        document.getElementById('textcolor1').style.backgroundColor = 'white';
        document.getElementById('textcolor2').style.backgroundColor = 'white';
        document.getElementById('textcolor3').style.backgroundColor = 'white';
        document.getElementById('textcolor4').style.backgroundColor = 'white';

      } else {
        document.getElementById('changecolor').style.backgroundColor = 'white';
        document.getElementById('textcolor1').style.backgroundColor = 'black';
        document.getElementById('textcolor2').style.backgroundColor = 'black';
        document.getElementById('textcolor3').style.backgroundColor = 'black';
        document.getElementById('textcolor4').style.backgroundColor = 'black';

      }
    });
  }

}
