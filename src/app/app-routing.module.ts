import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Profiles } from './pages/profiles/profiles';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: Profiles },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/home' }  // 404 fallback
];