import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { City } from '../shared/models/city.model';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('/api/cities');
  }

  countCitys(): Observable<number> {
    return this.http.get<number>('/api/cities/count');
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>('/api/city', city);
  }

  addIfNotExist(city: City): Observable<City> {
    return this.http.post<City>('/api/city/ifNotId', city);
  }

  getCity(city: City): Observable<City> {
    return this.http.get<City>(`/api/city/${city._id}`);
  }

  editCity(city: City): Observable<string> {
    return this.http.put(`/api/city/${city._id}`, city, { responseType: 'text' });
  }

  deleteCity(city: City): Observable<string> {
    return this.http.delete(`/api/city/${city._id}`, { responseType: 'text' });
  }

}
