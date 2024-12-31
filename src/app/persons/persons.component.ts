import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBannerComponent } from '../common/components/product-banner/product-banner.component';
import { HealthInsureComponent } from './components/sections/health-insure/health-insure.component';
import { EducationInsureComponent } from './components/sections/education-insure/education-insure.component';
import { PensionInsureComponent } from './components/sections/pension-insure/pension-insure.component';
import { HomeInsureComponent } from './components/sections/home-insure/home-insure.component';
import { LeaseInsureComponent } from './components/sections/lease-insure/lease-insure.component';
import { AutosInsureComponent } from './components/sections/autos-insure/autos-insure.component';
import { BikeInsureComponent } from "./components/sections/bike-insure/bike-insure.component";
import { FlightInsureComponent } from "./components/sections/flight-insure/flight-insure.component";
import { personOptions } from '../../constants/navOptions';
import { LifeCategoryInsureComponent } from "./components/sections/life-category-insure/life-category-insure.component";
import { PetInsureComponent } from "./components/sections/pet-insure/pet-insure.component";
import { ContactFormComponent } from "../common/sections/contact-form/contact-form.component";

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    ProductBannerComponent,
    HealthInsureComponent,
    EducationInsureComponent,
    PensionInsureComponent,
    HomeInsureComponent,
    LeaseInsureComponent,
    AutosInsureComponent,
    BikeInsureComponent,
    FlightInsureComponent,
    LifeCategoryInsureComponent,
    PetInsureComponent,
    ContactFormComponent
],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css',
})
export class PersonsComponent implements OnInit {
  selectedProduct: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const routeParam = params.get('category') ?? 'vida';
      this.selectedProduct = personOptions.find((option) => option.shortName == routeParam)?.id ?? 1;
    });
  }

  routeProduct(category: string) {
    this.router.navigate([`/personas/${category}`]);
  }
}
