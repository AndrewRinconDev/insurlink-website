import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonsComponent } from './persons/persons.component';
import { CompaniesComponent } from './companies/companies.component';
import { AboutComponent } from './about/about.component';
import { InsurersComponent } from './insurers/insurers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'personas/:category',
    component: PersonsComponent,
  },
  {
    path: 'personas/:category/:type',
    component: PersonsComponent,
  },
  {
    path: 'empresas/:category',
    component: CompaniesComponent,
  },
  {
    path: 'empresas/:category/:type',
    component: CompaniesComponent,
  },
  {
    path: 'aseguradoras',
    component: InsurersComponent,
  },
  {
    path: 'contacto',
    component: HomeComponent,
  },
];
