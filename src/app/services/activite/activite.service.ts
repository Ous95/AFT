import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activite} from '../../models/activite.model';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/activite';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getActivites(): Observable<Activite[]> {
    let activites = this.http.get<Activite[]>(this.apiUrl);
    return activites;
  }

  addActivite(activite: Activite): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(activite), {headers: this.auth.headers});
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  update(id: number, activite: Activite): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(activite), {headers: this.auth.headers})
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.auth.headers})
  }
}
