import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {Adherent} from '../models/adherent.model';


@Injectable({
  providedIn: 'root'
})
export class AdherentService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/adherent';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getAdherents(): Observable<Adherent[]> {
    let adherents = this.http.get<Adherent[]>(this.apiUrl);
    return adherents;
  }

  addAdherent(adherent: Adherent): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(adherent), {headers: this.auth.headers});
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  update(id: number, adherent: Adherent): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(adherent), {headers: this.auth.headers})
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.auth.headers})
  }
}
