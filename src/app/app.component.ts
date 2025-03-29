import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {HttpClient} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth/auth.service';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavContent, MatListItem, MatIcon, MatNavList, MatSidenav, MatSidenavContainer, RouterLink, MatButton],
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
