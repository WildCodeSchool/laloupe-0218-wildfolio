import { BlogProjetService } from './../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { StudentService } from '../services/student.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Student } from '../shared/models/student.model';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  student = new Student();
  students: Student[];
  isLoading = true;
  isEditing = false;
  id: string;
  me;
  edit = false;

  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];

  addStudentForm: FormGroup;
  email = new FormControl('', Validators.required);
  github = new FormControl('');
  image = new FormControl('');
  name = new FormControl('');
  langage = new FormControl('');
  session = new FormControl('');
  poste = new FormControl('');
  specialites = new FormControl('');

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private wcsService: WcsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private blogProjetService: BlogProjetService,
  ) {}

  ngOnInit() {
    this.getMe();
    this.id = this.route.snapshot.paramMap.get('id');
    this.addStudentForm = this.formBuilder.group({
      image: this.image,
      github: this.github,
      email: this.email,
      langage: this.langage,
      session: this.session,
      poste: this.poste,
      specialites : this.specialites,
    });
  }

  getMe() {
    this.studentService.getMe().subscribe(
      (data) => {
        this.me = data,
        this.getBlogProjetIfNotAdmin();
        // console.log(this.me);
      },
      error => console.log(error),
      () => this.isLoading = false,
  );
  }

  // getStudent() {
  //   this.studentService.getStudent(this.id).subscribe(
  //     (data) => {
  //       this.student = data;
  //       console.log(this.student);
  //     },
  //   );
  // }
  enableEditing(student: Student) {
    this.isEditing = true;
    this.student = student;
  }

  cancelEditing() {
    this.isEditing = false;
    this.edit = false;
    this.student = new Student();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getMe();
  }

  editStudent(student: Student) {
    this.studentService.editStudent(student).subscribe(
      () => {
        this.isEditing = false;
        this.edit = false;
        this.student = student;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteStudent(student: Student) {
    if (
        window.confirm('Are you sure you want to permanently delete this item?')
      ) {
      this.studentService.deleteStudent(student).subscribe(
          () => {
            const pos = this.students.map(elem => elem._id).indexOf(student._id);
            this.students.splice(pos, 1);
            this.toast.setMessage('item deleted successfully.', 'success');
          },
          error => console.log(error),
        );
    }
  }

  addStudent() {
    for (let i = 0; i < this.me.length; i += 1) {
      if (this.students[i].name === this.addStudentForm.value.name) {
        return false;
      }
    }
    return true;
  }

  showEdit() {
    this.edit = true;
    this.isEditing = true;
  }

  hiddenEdit() {
    this.edit = false;
    this.isEditing = false;

  }
  getBlogProjetIfNotAdmin() {
    this.blogProjetService.getBlogProjetsByUser(this.me._id).subscribe(
      (data) => {
        this.blogProjets = data;
        // console.log(this.blogProjets);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );

  }
  // isAdmin() {
  //   return this.student.admin = true;
  // }

  // isNotAdmin() {
  //   return this.student.admin = false;
  // }

}
