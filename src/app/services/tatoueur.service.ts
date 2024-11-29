import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tatoueur} from '../models/tatoueur.model';
@Injectable({
  providedIn: 'root'
})
export class TatoueurService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/tatoueur';
  constructor(private http: HttpClient) {}
//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getTatoueurs():Observable<Tatoueur[]>{
    let tatoueurs = this.http.get<Tatoueur[]>(this.apiUrl);
    return tatoueurs;
  }
}
