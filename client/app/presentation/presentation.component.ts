import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {

  isClick = false;

  constructor() { }

  ngOnInit() {
  }

  isSearched() {
    this.isClick = true
  }

}
