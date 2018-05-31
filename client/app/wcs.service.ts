import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './shared/models/student.model';

@Injectable()
export class WcsService {

  student: Student = new Student();

  constructor(private http: HttpClient) { }


  getMe() {
    return this.http.get('https://ppody.innoveduc.fr/api/v2/me');
  }

}

