import { Routes } from '@angular/router';
import { Curriculum } from './components/curriculum/curriculum';
import { Form } from './components/form/form';
import { ProjectsPageComponent } from './components/project/projects';
import { authGuard } from './misc/auth-guard';
import { ServiceHttpComponent } from './components/service-http/service-http-component';

export const routes: Routes = [
  { path: '', 
    component: Curriculum },
  { path: 'contacto', 
    component: Form,
    canActivate: [authGuard]},
  { path: 'proyectos', 
    component: ProjectsPageComponent },
  {
    path: 'service-http-component',
    component: ServiceHttpComponent,
  },
  { path: '**', 
    redirectTo: '' }, 
];
