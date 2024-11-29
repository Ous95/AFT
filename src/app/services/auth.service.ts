import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  public authenticated = false;
  constructor(private http: HttpClient,private router: Router) { }
  login(username: string | null | undefined, password: string | null | undefined) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });
    this.http.get(`${this.baseUrl}/tatoueur`, { headers }).subscribe({
      next: (response) => {
        this.authenticated=true;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.authenticated=false;
      }
    });
    return this.authenticated;
  }
  //Ce code récupère un username et un password, l’ajoute en tant que Basic Auth
  // dans les requêtes json, et fait un simple http get sur tatoueur pour vérifier si l’authentification fonctionne
  logout(){
    this.authenticated=false;
    this.router.navigate(['/login']);
  }
}
