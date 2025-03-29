import { Routes } from '@angular/router';
import {SportComponent} from './components/sport/sport.component';

import {LoginComponent} from './components/login/login.component';
import {SportViewComponent} from './components/sport/sport-view/sport-view.component';

import {SportEditComponent} from './components/sport/sport-edit/sport-edit.component';



import {CoursComponent} from './components/cours/cours.component';
import {SportCreateComponent} from './components/sport/sport-create/sport-create.component';

import {ActiviteComponent} from './components/activite/activite.component';
export const routes: Routes = [
  {
    path: 'sport',
    title: 'Nos Sports',
    component: SportComponent,
  },
  {
    path: 'sport/:sportId/view',
    component: SportViewComponent
  },

  {
    path: 'sport/:sportId/edit',
    component: SportEditComponent
  },

  {
    path: 'sport/create',
    component: SportCreateComponent
  },
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },

  {path: 'cours',
  title: 'Nos Cours',
  component: CoursComponent,

  },


  {
    path: 'activite',
    title: 'Nos Activite',
    component: ActiviteComponent,
  },





];


