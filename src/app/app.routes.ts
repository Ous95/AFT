import { Routes } from '@angular/router';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {TatoueuraComponent} from './components/tatoueura/tatoueura.component';
import {LoginComponent} from './components/login/login.component';
import {TatoueurViewComponent} from './components/tatoueur/tatoueur-view/tatoueur-view.component';
import {TatoueurCreateComponent} from './components/tatoueur/tatoueur-create/tatoueur-create.component';
import {TatoueurEditComponent} from './components/tatoueur/tatoueur-edit/tatoueur-edit.component';
import {TatoueuraViewComponent} from './components/tatoueura/tatoueura-view/tatoueura-view.component';
import {TatoueuraCreateComponent} from './components/tatoueura/tatoueura-create/tatoueura-create.component';
import {TatoueuraEditComponent} from './components/tatoueura/tatoueura-edit/tatoueura-edit.component';





import {CoursComponent} from './components/cours/cours.component';
export const routes: Routes = [
  {
    path: 'tatoueur',
    title: 'Nos tatoueurs',
    component: TatoueurComponent,
  },
  {
    path: 'tatoueur/:tatoueurId/view',
    component: TatoueurViewComponent
  },
  {
    path: 'tatoueur/create',
    component: TatoueurCreateComponent
  },
  {
    path: 'tatoueur/:tatoueurId/edit',
    component: TatoueurEditComponent
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

  {path: 'tatoueura',
    title: 'Nos tatoueura',
    component: TatoueuraComponent,

  },
  {
    path: 'tatoueura/:tatoueuraId/view',
    component: TatoueuraViewComponent
  },
  {
    path: 'tatoueura/create',
    component: TatoueuraCreateComponent
  },
  {
    path: 'tatoueura/:tatoueuraId/edit',
    component: TatoueuraEditComponent
  },




];


