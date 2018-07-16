import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';

@Component({
  selector: 'app-student-eleve',
  templateUrl: './student-eleve.component.html',
  styleUrls: ['./student-eleve.component.css'],
})
export class StudentEleveComponent implements OnInit {

  student: Student;
  id: string;
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  isLoading = true;
  // phone = false;

  constructor(private wcsService: WcsService,
              private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private blogProjetService: BlogProjetService) { }

  ngOnInit() {
    /*  this.wcsService.getMe().subscribe((data => {
      this.wcsService.student = data;
      this.student = this.wcsService.student
      console.log(this.student);
     })) */
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent(this.id).subscribe(
      (data) => {
        this.student = data;
        this.getBlogProjetIfNotAdmin();
        this.getBlogProjetWhenLinkByAllies();
        // console.log('Cet élève', this.student);
      },
    );
  }
  getBlogProjetWhenLinkByAllies() {
    this.blogProjetService.getBlogProjetsByParticipant(this.student._id).subscribe(
      (data) => {
        // console.log('Eleves/_id', this.blogProjet);
        this.blogProjets = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
      );
  }

  getBlogProjetIfNotAdmin() {
    this.blogProjetService.getBlogProjetsByCreator(this.student._id).subscribe(
      (data) => {
        this.blogProjets = data;
        // console.log('blogProjet', this.blogProjets);
      },
      error => console.log(error),
      () => this.isLoading = false,
      );
  }

  sendMail(email, name) {
    this.studentService.mail = email;
    this.studentService.name = name;
    this.router.navigate(['/mail']);
  }

  // displayPhone() {
  //   this.phone = true;
  // }

}
