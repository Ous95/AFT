import { Routes } from '@angular/router';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'tatoueurs',
    title: 'Nos tatoueurs',
    component: TatoueurComponent,
  },
  {
    path: 'login',
    title: 'les logins',
    component: LoginComponent,
  }
];


