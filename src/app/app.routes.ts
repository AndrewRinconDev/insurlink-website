import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonsComponent } from './persons/persons.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: HomeComponent,
  },
  {
    path: 'persons/:id',
    component: PersonsComponent,
  },
  {
    path: 'companies/:id',
    component: HomeComponent,
  },
];
