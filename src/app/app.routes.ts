import { Routes } from '@angular/router';

///// SPORT //////
import {SportComponent} from './components/sport/sport.component';
import {SportViewComponent} from './components/sport/sport-view/sport-view.component';
import {SportEditComponent} from './components/sport/sport-edit/sport-edit.component';
import {SportCreateComponent} from './components/sport/sport-create/sport-create.component';

///// LOGIN /////
import {LoginComponent} from './components/login/login.component';

//// COURS /////
import {CoursComponent} from './components/cours/cours.component';
/////// ACTIVITE ////
import {ActiviteComponent} from './components/activite/activite.component';
import {ActiviteViewComponent} from './components/activite/activite-view/activite-view.component';
import {ActiviteCreateComponent} from './components/activite/activite-create/activite-create.component';
import {ActiviteEditComponent} from './components/activite/activite-edit/activite-edit.component';
/////// ADHERENT ///////
import {AdherentComponent} from './components/adherent/adherent.component';
import {AdherentCreateComponent} from './components/adherent/adherent-create/adherent-create.component';
import {AdherentEditComponent} from './components/adherent/adherent-edit/adherent-edit.component';
import {AdherentViewComponent} from './components/adherent/adherent-view/adherent-view.component';
/////// CULTURE ///////
import {CultureComponent} from './components/culture/culture.component';
import {CultureViewComponent} from './components/culture/culture-view/culture-view.component';
import {CultureEditComponent} from './components/culture/culture-edit/culture-edit.component';
import {CultureCreateComponent} from './components/culture/culture-create/culture-create.component';



















export const routes: Routes = [

  /////// SPORT /////
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

  ////// LOGIN ////////
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },

  //////// COURS //////////

  {path: 'cours',
  title: 'Nos Cours',
  component: CoursComponent,

  },



////////// ADHERENT  ////////////
  {
    path: 'adherent',
    title: 'Nos Adherents',
    component: AdherentComponent,
  },

  {
    path: 'adherent/:adherentId/view',
    component: AdherentViewComponent
  },

  {
    path: 'adherent/:adherentId/edit',
    component: AdherentEditComponent
  },

  {
    path: 'adherent/create',
    component: AdherentCreateComponent
  },

  ///////////// CULTURE ////////////
  {
    path: 'culture',
    title: 'Nos Culture',
    component: CultureComponent,
  },


  {
    path: 'culture/:cultureId/view',
    component: CultureViewComponent
  },

  {
    path: 'culture/:cultureId/edit',
    component: CultureEditComponent
  },

  {
    path: 'culture/create',
    component: CultureCreateComponent
  },

  ////////// ACTIVITE //////////

  {
    path: 'activite',
    title: 'Nos Activite',
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







];


