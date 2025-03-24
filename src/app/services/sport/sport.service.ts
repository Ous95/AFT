import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sport} from '../../models/sport.model';
import {AuthService} from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SportService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/sport';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getSports(): Observable<Sport[]> {
    let sports = this.http.get<Sport[]>(this.apiUrl);
    return sports;
  }

  addSport(sport: Sport): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(sport), {headers: this.auth.headers});
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  update(id: number, sport: Sport): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(sport), {headers: this.auth.headers})
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.auth.headers})
  }
}
