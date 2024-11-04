import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'group-life',
    component: HomeComponent,
  },
  {
    path: 'group-life/:id',
    component: HomeComponent,
  },
];
