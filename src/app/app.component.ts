import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CookieComponent} from './cookie/cookie.component';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {HttpClient} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TatoueurComponent, MatSidenavContent, MatListItem, MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Banu';
  date=new Date();

//Ce code appelle notre service d’authentification et récupère un booléen : si l’user
// est connecté ou non.
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
  }
  authenticated() { return this.auth.authenticated; }

  logout(){this.auth.logout();}
}
