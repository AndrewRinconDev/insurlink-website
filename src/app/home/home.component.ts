import { Component } from '@angular/core';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { ProductsCategoryCardComponent } from './components/products-category-card/products-category-card.component';
import { FeatureProductsComponent } from './components/feature-products/feature-products.component';
import { OurAlliesComponent } from './components/our-allies/our-allies.component';
import { InsuranceExperienceComponent } from './components/insurance-experience/insurance-experience.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { WhyInsurlinkComponent } from './components/why-insurlink/why-insurlink.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainBannerComponent,
    ProductsCategoryCardComponent,
    FeatureProductsComponent,
    OurAlliesComponent,
    InsuranceExperienceComponent,
    CustomersComponent,
    HomeBannerComponent,
    WhyInsurlinkComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
