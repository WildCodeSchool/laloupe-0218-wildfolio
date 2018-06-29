import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';
import * as AOS from 'aos';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';
import { WcsService } from '../wcs.service';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/src/dom/debug/ng_probe';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})

export class PresentationComponent implements OnInit {
  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  isLoading = true;
  isClick = false;
  recruts: Recrut[] = [];
  students: Student[];
  student = new Student();

  constructor(
    route: ActivatedRoute,
    private recrutService: RecrutService,
    private studentService: StudentService,
    private blogProjetService: BlogProjetService,
  ) { }

  ngOnInit() {
    this.getBlogProjet();
    this.getStudent();
    this.getRecrut();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-sine',
    });

  }

  // Oeil du recruteur

  getRecrut() {
    this.recrutService.getRecruts().subscribe((data) => {
      this.recruts = data;
    });
  }

  isSearched() {
    this.isClick = true;
  }


  // Projets

  getBlogProjet() {
    this.blogProjetService.getBlogProjets().subscribe(
      (data) => {
        this.blogProjets = data;
        // for (let i = 0; i < this.blogProjets.length; i++) {
        //   let num = Math.floor(Math.random() * 3);
        //   console.log(this.blogProjets[i].WCS_id);
        // }
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

   // Développeurs

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
        return Math.floor(Math.random() * this.student.WCS_ID);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
  
}
