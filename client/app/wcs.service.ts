import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WcsService {

  constructor(private http: HttpClient) { }

  getMe() {
    return this.http.get('https://ppody.innoveduc.fr/api/v2/me');
  }

}

