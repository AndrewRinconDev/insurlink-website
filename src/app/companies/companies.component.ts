import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBannerComponent } from '../common/components/product-banner/product-banner.component';
import { companyOptions } from '../../constants/navOptions';
import { CollectiveCategoryInsureComponent } from './components/sections/collective-category-insure/collective-category-insure.component';
import { CoOwnershipInsureComponent } from './components/sections/co-ownership-insure/co-ownership-insure.component';
import { ComplianceInsureComponent } from './components/sections/compliance-insure/compliance-insure.component';
import { CivilLiabilityInsureComponent } from './components/sections/civil-liability-insure/civil-liability-insure.component';
import { FinancialInsureComponent } from "./components/sections/financial-insure/financial-insure.component";
import { BuildingInsureComponent } from "./components/sections/building-insure/building-insure.component";
import { TransportInsureComponent } from "./components/sections/transport-insure/transport-insure.component";
import { PymeInsureComponent } from "./components/sections/pyme-insure/pyme-insure.component";
import { ContactFormComponent } from "../common/sections/contact-form/contact-form.component";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    ProductBannerComponent,
    CollectiveCategoryInsureComponent,
    CoOwnershipInsureComponent,
    ComplianceInsureComponent,
    CivilLiabilityInsureComponent,
    FinancialInsureComponent,
    BuildingInsureComponent,
    TransportInsureComponent,
    PymeInsureComponent,
    ContactFormComponent
],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent implements OnInit {
  selectedProduct: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const routeParam = params.get('category') ?? 'vida';
      this.selectedProduct =
        companyOptions.find((option) => option.shortName == routeParam)?.id ??
        1;
    });
  }

  routeProduct(category: string) {
    this.router.navigate([`/empresas/${category}`]);
  }
}
