import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityService } from '../services/city.service';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';

@Component({
  selector: 'app-projet-research',
  templateUrl: './projet-research.component.html',
  styleUrls: ['./projet-research.component.css'],
})
export class ProjetResearchComponent implements OnInit {
  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  isLoading = true;

  cities = [];
  selectedCity: any;

  constructor(
    private cityService: CityService,
    private wcsService: WcsService,
    private blogProjetService: BlogProjetService,
    private route: ActivatedRoute) { }

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

  getBlogProjet() {
    this.blogProjetService.getBlogProjets(this.selectedCity).subscribe(
      (data) => {
        this.blogProjets = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  showProject() {
    this.getBlogProjet();
  }
}

// $(function() {
//   $('.scroll-down').click (function() {
//     $('html, body').animate({scrollTop: $('section#portfolio').offset().top }, 'slow');
//     return false;
//   });
// });


