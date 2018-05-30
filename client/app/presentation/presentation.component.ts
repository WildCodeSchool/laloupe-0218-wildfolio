import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {

  isClick = false;
  recruts: Recrut[] = []

  constructor(route: ActivatedRoute, private recrutService: RecrutService) { 
    console.log("J'ai trouvé le code", route.snapshot.queryParamMap.get('code'));
  }

  ngOnInit() {
    this.getRecrut();
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
