import { LangageService } from './../services/langage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';
import * as AOS from 'aos';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { Langage } from '../shared/models/langage.model';

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
  selectedLangage: any = -1;
  langage = new Langage();
  langages: Langage[] = [];
  math;
  ramdomProfil = [];
  ramdomProjets = [];
  isCharged = false;

  constructor(
    private recrutService: RecrutService,
    private studentService: StudentService,
    private blogProjetService: BlogProjetService,
    private langageService: LangageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getBlogProjet();
    this.getStudent();
    this.getLangage();
    this.getRecrut();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-sine',
    });

  }

  getLangage() {
    this.langageService.getLangages().subscribe(
      (data) => {
        // console.log(data);
        this.langages = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
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
        this.ramdomProjets = this.shuffle(this.blogProjets);
        // console.log(this.ramdomProjets);
        this.isCharged = true;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  // Random Array

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Développeurs

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        this.ramdomProfil = this.shuffle(this.students);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  // Langages

  getLangageById() {
    this.studentService.getLangageById(this.selectedLangage).subscribe(
      (data) => {
        this.students = data;
        // console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
    localStorage.setItem('selectedLangage', this.selectedLangage);
    this.router.navigate(['/list-students']);
  }

  showDev() {
    this.getLangageById();
  }
}
