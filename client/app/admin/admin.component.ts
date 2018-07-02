import { BlogProjetService } from './../services/blogProjet.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';
import { StudentService } from '../services/student.service';
import { BlogProjet } from '../shared/models/blogProjet.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  id: string;
  me;
  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  constructor(
    public toast: ToastComponent,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private blogProjetService: BlogProjetService,
  ) { }

  ngOnInit() {
    this.getMe();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBlogProjet();

  }
  getMe() {
    this.studentService.getMe().subscribe(
      (data) => {
        this.me = data,
        console.log(this.me);
      },
      error => console.log(error),
      () => this.isLoading = false,
  );
  }
  getBlogProjet() {
    this.blogProjetService.getBlogProjets().subscribe(
      (data) => {
        this.blogProjets = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
 /*  verifyRoles() {
    if (this.me.admin === false || this.me.roles.length === 0 || this.me.sessionId === this.blogProjet.sessionId ||
      this.me.WCS_id === this.blogProjet.studentId) {
      console.log('NOT Admin');
    }
  } */
}
