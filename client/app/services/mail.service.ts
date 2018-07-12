import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Mail } from '../shared/models/mail.model';
import { Langage } from '../shared/models/langage.model';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) { }

  getMails(): Observable<Mail[]> {
    return this.http.get<Mail[]>('/api/mails');
  }

  getMe(): Observable<Mail> {
    const id = localStorage.getItem('WCS_ID');
    return this.http.get<Mail>(`/api/student/wcs/${id}`);
  }

  getMyLocation(): Observable<Mail> {
    const locationid = localStorage.getItem('locationId');
    return this.http.get<Mail>(`/api/mail/wcs/${locationid}`);
  }

  getLangageById(langageId: number): Observable<Mail[]> {
    return this.http.get<Mail[]>(`/api/mail/langage/${langageId}`);
  }

  getMailById(WCS_ID: number): Observable<Mail[]> {
    return this.http.get<Mail[]>(`/api/mail/${WCS_ID}`);
  }

  countMails(): Observable<number> {
    return this.http.get<number>('/api/mails/count');
  }

  addMail(mail: Mail): Observable<Mail> {
    return this.http.post<Mail>('/api/mail', mail);
  }

  addMailIfNotExists(mail: Mail): Observable<Mail> {
    return this.http.post<Mail>('/api/mail/ifNotExists', mail);
  }

  getMail(mailid: string): Observable<Mail> {
    return this.http.get<Mail>(`/api/mail/${mailid}`);
  }

  editMail(mail: Mail): Observable<string> {
    return this.http.put(`/api/mail/${mail._id}`, mail, { responseType: 'text' });
  }

  deleteMail(mail: Mail): Observable<string> {
    return this.http.delete(`/api/mail/${mail._id}`, { responseType: 'text' });
  }
}
