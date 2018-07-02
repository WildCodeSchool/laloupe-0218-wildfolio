import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Langage } from '../shared/models/langage.model';

@Injectable()
export class LangageService {
  constructor(private http: HttpClient) { }

  getLangages(): Observable<Langage[]> {
    return this.http.get<Langage[]>('/api/langages');
  }

  countLangages(): Observable<number> {
    return this.http.get<number>('/api/langages/count');
  }

  addLangage(langage: Langage): Observable<Langage> {
    return this.http.post<Langage>('/api/langage', langage);
  }

  addIfNotExist(langage: Langage): Observable<Langage> {
    return this.http.post<Langage>('/api/langage/ifNotExists', langage);
  }

  getLangage(langageid: string): Observable<Langage> {
    return this.http.get<Langage>(`/api/langage/${langageid}`);
  }

  editLangage(langage: Langage): Observable<string> {
    return this.http.put(`/api/langage/${langage.id}`, langage, { responseType: 'text' });
  }

  deleteLangage(langage: Langage): Observable<string> {
    return this.http.delete(`/api/langage/${langage.id}`, { responseType: 'text' });
  }
}
