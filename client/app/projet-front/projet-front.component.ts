import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-front',
  templateUrl: './projet-front.component.html',
  styleUrls: ['./projet-front.component.css'],
})
export class ProjetFrontComponent implements OnInit {

  id: string;
  projet: Projet;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.projetService.getPost(this.id)
    .subscribe((projet) => {
      this.projet = projet;
    });
  }

}
