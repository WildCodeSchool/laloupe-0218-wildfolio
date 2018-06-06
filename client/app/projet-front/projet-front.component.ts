import { Component, OnInit } from '@angular/core';
import { BlogProjetService } from '../services/blogProjet.service';
import { ActivatedRoute } from '@angular/router';
import { BlogProjet } from '../shared/models/blogProjet.model';

@Component({
  selector: 'app-projet-front',
  templateUrl: './projet-front.component.html',
  styleUrls: ['./projet-front.component.css'],
})
export class ProjetFrontComponent implements OnInit {

  id: string;
  projet: BlogProjet;

  constructor(private blogProjetService: BlogProjetService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.blogProjetService.getBlogProjet(this.id)
      .subscribe((projet) => {
        this.projet = projet;
      });
  }
}

