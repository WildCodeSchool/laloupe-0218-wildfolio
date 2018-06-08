import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';
import * as AOS from 'aos';
import { StudentService } from '../services/student.service';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {

  isClick = false;
  recruts: Recrut[] = [];

  constructor(route: ActivatedRoute, private recrutService: RecrutService, private wcsService: WcsService) {
  }

  ngOnInit() {
    this.getRecrut();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-sine',
    });
  }

  getRecrut() {
    this.recrutService.getRecruts().subscribe(
      (data) => {
        this.recruts = data;
      },
    );
  }

  isSearched() {
    this.isClick = true;
  }

}
