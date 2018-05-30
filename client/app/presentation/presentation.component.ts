import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';
<<<<<<< HEAD
import * as AOS from 'aos';
=======
import { StudentService } from '../services/student.service';
>>>>>>> f9afd77727baaf234016eb9be6ac7abc75124a5f

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {

  isClick = false;
  recruts: Recrut[] = [];

  constructor(route: ActivatedRoute, private recrutService: RecrutService) {
    console.log('Jai trouvé le code', route.snapshot.queryParamMap.get('code'));
  }

  ngOnInit() {
    this.getRecrut();
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-sine'
    });
  }

  getRecrut() {
    this.recrutService.getRecruts().subscribe(
      (data) => {
        console.log(data);
        this.recruts = data;
      },
    );
  }

  isSearched() {
    this.isClick = true;
  }

}
