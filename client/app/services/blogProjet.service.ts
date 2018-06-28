import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BlogProjet } from '../shared/models/blogProjet.model';

@Injectable()
export class BlogProjetService {

  constructor(private http: HttpClient) { }

  getBlogProjets(city): Observable<BlogProjet[]> {
    console.log(city);
    return this.http.get<BlogProjet[]>('/api/blogProjet', { params: { city } });
  }

  countBlogProjets(): Observable<number> {
    return this.http.get<number>('/api/blogProjet/count');
  }

  addBlogProjet(blogProjet: BlogProjet): Observable<BlogProjet> {
    return this.http.post<BlogProjet>('/api/blogProjet', blogProjet);
  }

  getBlogProjet(blogProjetid: string): Observable<BlogProjet> {
    return this.http.get<BlogProjet>(`/api/blogProjet/${blogProjetid}`);
  }

  editBlogProjet(blogProjet: BlogProjet): Observable<string> {
    return this.http.put(`/api/blogProjet/${blogProjet._id}`, blogProjet, { responseType: 'text' });
  }

  deleteBlogProjet(blogProjet: BlogProjet): Observable<string> {
    return this.http.delete(`/api/blogProjet/${blogProjet._id}`, { responseType: 'text' });
  }

}
