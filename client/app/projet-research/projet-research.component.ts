import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityService } from '../services/city.service';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-research',
  templateUrl: './projet-research.component.html',
  styleUrls: ['./projet-research.component.css'],
})
export class ProjetResearchComponent implements OnInit {

  cities = [];

  constructor(private cityService: CityService, private wcsService: WcsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCity();
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
}
