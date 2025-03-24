import { Routes } from '@angular/router';
import {SportComponent} from './components/sport/sport.component';
import {ActiviteComponent} from './components/activite/activite.component';
import {LoginComponent} from './components/login/login.component';
import {SportViewComponent} from './components/sport/sport-view/sport-view.component';
import {SportCreateComponent} from './components/sport/sport-create/sport-create.component';
import {SportEditComponent} from './components/sport/sport-edit/sport-edit.component';
import {ActiviteViewComponent} from './components/activite/activite-view/activite-view.component';
import {ActiviteCreateComponent} from './components/activite/activite-create/activite-create.component';
import {ActiviteEditComponent} from './components/activite/activite-edit/activite-edit.component';

import {AdherentComponent} from './components/adherent/adherent.component';


import {CoursComponent} from './components/cours/cours.component';
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
    path: 'sport/create',
    component: SportCreateComponent
  },
  {
    path: 'sport/:sportId/edit',
    component: SportEditComponent
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

  {path: 'activite',
    title: 'Nos activites',
    component: ActiviteComponent,

  },
  {
    path: 'activite/:activiteId/view',
    component: ActiviteViewComponent
  },
  {
    path: 'activite/create',
    component: ActiviteCreateComponent
  },
  {
    path: 'activite/:activiteId/edit',
    component: ActiviteEditComponent
  },
  {path: 'adherent',
    title: 'Nos adherent',
    component: AdherentComponent,

  },




];


