import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Student } from '../shared/models/student.model';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/students');
  }

  countStudents(): Observable<number> {
    return this.http.get<number>('/api/students/count');
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('/api/student', student);
  }

  getStudent(student: Student): Observable<Student> {
    return this.http.get<Student>(`/api/student/${student._id}`);
  }

  editStudent(student: Student): Observable<string> {
    return this.http.put(`/api/student/${student._id}`, student, { responseType: 'text' });
  }

  deleteStudent(student: Student): Observable<string> {
    return this.http.delete(`/api/student/${student._id}`, { responseType: 'text' });
  }

}
