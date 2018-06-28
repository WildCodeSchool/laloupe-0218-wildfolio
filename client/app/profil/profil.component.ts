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
export class StudentsComponent implements OnInit {

  student = new Student();
  students: Student[];
  isLoading = true;
  isEditing = false;

  addStudentForm: FormGroup;
  email = new FormControl('', Validators.required);
  github = new FormControl('', Validators.required);
  linkedin = new FormControl('', Validators.required);
  lienLinkedin = new FormControl('', Validators.required);
  image = new FormControl('', Validators.required);
  // <!-- name: String,
  // lastname: String,
  // email: String,
  // github: String,
  // linkedin: String,
  // lienlinkedin: String,
  // image: String, -->
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private wcsService: WcsService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.getMe();

  }

  getMe() {
    return this.http.get('https://ppody.innoveduc.fr/api/v2/me');
  }

  getStudent() {
    this.studentService.getStudents().subscribe(
        (data) => {
          console.log(data);
          this.students = data;
         /*  console.log(this.members); */
        },
        error => console.log(error),
        () => this.isLoading = false,
      );
  }
  enableEditing(student: Student) {
    this.isEditing = true;
    this.student = student;
  }

  cancelEditing() {
    this.isEditing = false;
    this.student = new Student();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getStudent();
  }

  editStudent(student: Student) {
    this.studentService.editStudent(student).subscribe(
      () => {
        this.isEditing = false;
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

  canAddStudent() {
    for (let i = 0; i < this.students.length; i += 1) {
      if (this.students[i].name === this.addStudentForm.value.name) {
        return false;
      }
    }
    return true;
  }

  isAdmin() {
    return this.student.admin = true;
  }

  isNotAdmin() {
    return this.student.admin = false;
  }

}
