import { Component, OnInit } from '@angular/core';
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

  constructor(private blogProjetService: BlogProjetService) { }

  ngOnInit() {
    this.getBlogProjet();
  }
  getBlogProjet() {
    this.blogProjetService.getBlogProjets().subscribe(
      (data) => {
        this.blogProjets = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
