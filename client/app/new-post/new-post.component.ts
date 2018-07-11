import { Component, OnInit } from '@angular/core';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { WcsService } from '../wcs.service';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/models/student.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {

  students: Student[];
  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  me;
  isLoading = true;
  isEditing = false;
  student = new Student();
  selectedStudent;
  arrayStudent = [];

  addBlogProjetForm: FormGroup;
  name = new FormControl('', Validators.required);
  imageUrl = new FormControl('', Validators.required);
  link = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  eleves = new FormControl('');

  constructor(private blogProjetService: BlogProjetService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              private studentService: StudentService) { }

  ngOnInit() {
    this.getMe();
    this.getStudent();
    this.addBlogProjetForm = this.formBuilder.group({
      name: this.name,
      imageUrl: this.imageUrl,
      link: this.link,
      description: this.description,
      eleves: this.eleves,
    });
  }

  test() {
    console.log(this.selectedStudent);
    this.arrayStudent.push(this.selectedStudent);
    console.log(this.arrayStudent);
  }
  getMe() {
    this.studentService.getMe().subscribe(
      (data) => {
        this.me = data;
        console.log('me', this.me);
        if (this.me.admin === true || this.me.roles.length >= 1) {
          this.getBlogProjet();
        } else {
          this.getBlogProjetIfNotAdmin();
        }
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log('student', data);
        this.students = data;
        this.getStudentBySession();
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
  getStudentBySession() {
    this.studentService.getStudentBySession(this.me.sessionId).subscribe(
      (data) => {
        this.students = data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        console.log('studentBySessions', data);
        this.students = data;
      },
      error => console.log(error),
      () => (this.isLoading = false),
    );
  }
  // getStudentById() {
  //   this.studentService.getStudentById(this.selectedStudent).subscribe(
  //     (data) => {
  //       this.students = data;
  //       console.log(data);
  //     },
  //     error => console.log(error),
  //     () => this.isLoading = false,
  //   );
  // }
  getBlogProjet() {
    this.blogProjetService.getBlogProjets().subscribe(
      (data) => {
        this.blogProjets = data;
        console.log(this.blogProjets);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );

  }

  getBlogProjetIfNotAdmin() {
    this.blogProjetService.getBlogProjetsByUser(this.me._id).subscribe(
      (data) => {
        this.blogProjets = data;
        console.log('Les projets', this.blogProjets);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );

  }

  /* addProjet() {
    console.log(this.newBlogProjet);
    this.blogProjetService.addBlogProjet(this.newBlogProjet)
      .subscribe((blogProjet) => {
        console.log(blogProjet);
        this.newBlogProjet = new BlogProjet;
      });
  } */

  addBlogProjet() {
    if (this.canAddBlogProjet()) {
      this.studentService.getMe().subscribe((me) => {
        this.addBlogProjetForm.value.studentId = me._id;
        this.addBlogProjetForm.value.locationId = me.locationId;
        this.addBlogProjetForm.value.session = me.session;
        this.addBlogProjetForm.value.sessionId = me.sessionId;
        this.addBlogProjetForm.value.eleves = this.arrayStudent;
        console.log(' add projet', me);
        this.blogProjetService.addBlogProjet(this.addBlogProjetForm.value).subscribe(
          (blogProjet) => {
            this.newBlogProjet = new BlogProjet;
            this.blogProjets.push(blogProjet);
            this.addBlogProjetForm.reset();
            console.log(blogProjet);
            this.toast.setMessage('item added successfully.', 'success');
          },
          error => console.log(error),
        );
      });
    } else {
      this.addBlogProjetForm.reset();
      this.toast.setMessage('projet already exist.', 'warning');
    }
  }

  enableEditing(blogProjet: BlogProjet) {
    this.isEditing = true;
    this.blogProjet = blogProjet;
  }

  cancelEditing() {
    this.isEditing = false;
    this.blogProjet = new BlogProjet();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getBlogProjet();
  }

  editBlogProjet(blogProjet: BlogProjet) {
    this.blogProjetService.editBlogProjet(blogProjet).subscribe(
      () => {
        this.isEditing = false;
        this.blogProjet = blogProjet;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteBlogProjet(blogProjet: BlogProjet) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.blogProjetService.deleteBlogProjet(blogProjet).subscribe(
        () => {
          const pos = this.blogProjets.map(elem => elem._id).indexOf(blogProjet._id);
          this.blogProjets.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  canAddBlogProjet() {
    for (let i = 0; i < this.blogProjets.length; i += 1) {
      if (this.blogProjets[i].name === this.addBlogProjetForm.value.name) {
        return false;
      }
    }
    return true;
  }
/* tslint:disable:one-variable-per-declaration */

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getStudentById() {
    this.studentService.getStudentById(this.selectedStudent).subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
}
