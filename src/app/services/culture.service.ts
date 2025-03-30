import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {Culture} from '../models/culture.model';


@Injectable({
  providedIn: 'root'
})
export class CultureService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/culture';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getCultures(): Observable<Culture[]> {
    let cultures = this.http.get<Culture[]>(this.apiUrl);
    return cultures;
  }

  addCulture(culture: Culture): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(culture), {headers: this.auth.headers});
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  update(id: number, culture: Culture): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(culture), {headers: this.auth.headers})
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.auth.headers})
  }
}
