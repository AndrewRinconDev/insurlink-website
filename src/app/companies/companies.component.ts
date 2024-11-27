import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBannerComponent } from '../components/common/product-banner/product-banner.component';
import { companyProductsData } from '../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatIconModule, ProductBannerComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  selectedProduct: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedProduct = Number(params.get('id')) ?? 1;
    });
  }

  routeProduct(id: number) {
    this.router.navigate([`/companies/${id}`]);
  }
}
