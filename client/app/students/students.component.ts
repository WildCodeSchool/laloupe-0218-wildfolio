import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { StudentService } from '../services/student.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Student } from '../shared/models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  student = new Student();
  students: Student[] = [];
  isLoading = true;
  isEditing = false;

  addStudentForm: FormGroup;
  name = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);

  constructor(private studentService: StudentService, private formBuilder: FormBuilder, public toast: ToastComponent) { }

  ngOnInit() {
    this.getStudent();
    this.addStudentForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
    });
  }

  getStudent() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addStudent() {
    if (this.canAddStudent()) {
      this.studentService.addStudent(this.addStudentForm.value).subscribe(
        (res) => {
          this.students.push(res);
          this.addStudentForm.reset();
          this.toast.setMessage('item added successfully.', 'success');
        },
        error => console.log(error),
      );
    } else {
      this.addStudentForm.reset();
      this.toast.setMessage('campus already exist.', 'warning');
    }
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
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
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
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === this.addStudentForm.value.name) {
        return false;
      }
    }
    return true;
  }
}
