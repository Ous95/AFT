import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tatoueura} from '../models/tatoueura.model';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TatoueuraService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/tatoueura';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getTatoueurs(): Observable<Tatoueura[]> {
    let tatoueurs = this.http.get<Tatoueura[]>(this.apiUrl);
    return tatoueurs;
  }

  addTatoueur(tatoueura: Tatoueura): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(tatoueura), {headers: this.auth.headers});
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  update(id: number, tatoueura: Tatoueura): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(tatoueura), {headers: this.auth.headers})
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.auth.headers})
  }
}
