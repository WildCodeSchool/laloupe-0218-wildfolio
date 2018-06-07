import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Recrut } from '../shared/models/recrut.model';

@Injectable()
export class RecrutService {

  constructor(private http: HttpClient) { }

  getRecruts(): Observable<Recrut[]> {
    return this.http.get<Recrut[]>('/api/recruts');
  }

  countRecruts(): Observable<number> {
    return this.http.get<number>('/api/recruts/count');
  }

  addRecrut(recrut: Recrut): Observable<Recrut> {
    return this.http.post<Recrut>('/api/recrut', recrut);
  }

  getRecrut(recrut: Recrut): Observable<Recrut> {
    return this.http.get<Recrut>(`/api/recrut/${recrut._id}`);
  }

  editRecrut(recrut: Recrut): Observable<string> {
    return this.http.put(`/api/recrut/${recrut._id}`, recrut, { responseType: 'text' });
  }

  deleteRecrut(recrut: Recrut): Observable<string> {
    return this.http.delete(`/api/recrut/${recrut._id}`, { responseType: 'text' });
  }

}
