import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  public authenticated = false;
  public headers= new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,private router: Router) { }
  login(username: string | null | undefined, password: string | null | undefined) {
    //Si l’user est connecté, l’user contient les informations d’authentification
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });
    this.http.get(`${this.baseUrl}/sport`, { headers:this.headers }).subscribe({
      next: (response) => {
        this.authenticated=true;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.authenticated=false;
        //Si l’user est déconnecté, le header est minimal
        this.headers=new HttpHeaders({
          'Content-Type': 'application/json'
        });
      }
    });
    return this.authenticated;
  }
  logout(){
    this.authenticated=false;
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.router.navigate(['/login']);
  }
}
