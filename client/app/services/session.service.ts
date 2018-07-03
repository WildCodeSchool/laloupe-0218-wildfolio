import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Session } from '../shared/models/session.model';

@Injectable()
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>('/api/sessions');
  }

  countSessions(): Observable<number> {
    return this.http.get<number>('/api/sessions/count');
  }

  addSession(session: Session): Observable<Session> {
    return this.http.post<Session>('/api/session', session);
  }
  addIfNotExist(session: Session): Observable<Session> {
    return this.http.post<Session>('/api/session/ifNotExists', session);
  }

  getSession(session: Session): Observable<Session> {
    return this.http.get<Session>(`/api/session/${session._id}`);
  }

  editSession(session: Session): Observable<string> {
    return this.http.put(`/api/session/${session._id}`, session, { responseType: 'text' });
  }

  deleteSession(session: Session): Observable<string> {
    return this.http.delete(`/api/session/${session._id}`, { responseType: 'text' });
  }

}
