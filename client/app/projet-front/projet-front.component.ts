import { Component, OnInit } from '@angular/core';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-front',
  templateUrl: './projet-front.component.html',
  styleUrls: ['./projet-front.component.css'],
})
export class ProjetFrontComponent implements OnInit {
  blogProjet: BlogProjet;
  isLoading = false;
  id: string;

  constructor(private blogProjetService: BlogProjetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'),
    this.getBlogProjet();
  }
  getBlogProjet() {
    this.blogProjetService.getBlogProjet(this.id).subscribe(
      (data) => {
        this.blogProjet = data;
      },
    );
  }
}
