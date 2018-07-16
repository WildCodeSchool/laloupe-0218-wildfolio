import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CityService } from '../services/city.service';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { SessionService } from '../services/session.service';
import { Session } from '../shared/models/session.model';

@Component({
  selector: 'app-projet-research',
  templateUrl: './projet-research.component.html',
  styleUrls: ['./projet-research.component.css'],
})
export class ProjetResearchComponent implements OnInit {
  newSession: Session = new Session();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  isLoading = true;

  cities = [];
  sessions = [];
  selectedCityId: any = -1 ;
  selectedSession: any = -1;

  constructor(
    private cityService: CityService,
    private sessionService: SessionService,
    private wcsService: WcsService,
    private blogProjetService: BlogProjetService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCity();
    this.getSession();
  }

  getCity() {
    this.cityService.getCities().subscribe(
      (data) => {
        // console.log('city', data),
        this.cities = data.sort((a, b) => {
          if (a.city < b.city) { return - 1; }
          if (a.city > b.city) { return 1; }
          return 0;
        });
      },
    );
  }

  getSession() {
    this.sessionService.getSessions().subscribe(
      (data) => {
        // console.log(data);
        this.sessions = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }

  getBlogProjet() {
    this.blogProjetService.getBlogProjetsByLocationId(this.selectedCityId).subscribe(
      (data) => {
        this.blogProjets = data;
        // console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  getBlogProjetBySession() {
    this.blogProjetService.getBlogProjetsBySession(this.selectedSession).subscribe(
      (data) => {
        this.blogProjets = data;
        // console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  showProject() {
    this.getBlogProjet();
    this.getBlogProjetBySession();
    const elmnt = document.getElementById('research');
    elmnt.scrollIntoView();
  }
  somethingChanged(change) {
    // console.log('change', change);
    this.sessionService.getAllbyLocationId(change).subscribe(
      (data) => {
        this.sessions = data;
        // console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}

// $(function() {
//   $('.scroll-down').click (function() {
//     $('html, body').animate({scrollTop: $('section#portfolio').offset().top }, 'slow');
//     return false;
//   });
// });
