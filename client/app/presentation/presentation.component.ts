import { LangageService } from './../services/langage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recrut } from '../shared/models/recrut.model';
import { RecrutService } from '../services/recrut.service';
import * as AOS from 'aos';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';
import { WcsService } from '../wcs.service';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/src/dom/debug/ng_probe';
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
  selectedLangage: any;
  langage = new Langage();
  langages: Langage[] = [];
  math;
  ramdomProfil = [];
  ramdomProjets = [];
  isCharged = false;

  constructor(
    route: ActivatedRoute,
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
        console.log(data);
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
        console.log(this.ramdomProjets);
        this.isCharged = true;
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
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        this.ramdomProfil = this.shuffle(this.students);
        // for (let i = 0; i < 3; i += 1) {
        //   this.math = Math.floor(Math.random() * this.students.length);
        //   if (this.ramdomProfil[i] === this.ramdomProfil[i - 1] || this.ramdomProfil[i] === this.ramdomProfil[i - 2]) {
        //     this.math = Math.floor(Math.random() * this.students.length);
        //   }
        //   this.ramdomProfil.push(this.students[this.math]);
        // }
        console.log(this.ramdomProfil);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
  getLangageById() {
    this.studentService.getLangageById(this.selectedLangage).subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
<<<<<<< HEAD
=======
    localStorage.setItem('selectedLangage', this.selectedLangage);
>>>>>>> b62baa533ba28a1534468b7568510ffd389ead0d
    this.router.navigate(['/list-students']);
  }
  showDev() {
    this.getLangageById();
  }
}
