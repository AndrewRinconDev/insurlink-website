import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBannerComponent } from '../common/components/product-banner/product-banner.component';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatIconModule, ProductBannerComponent],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit {
  selectedProduct: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedProduct = Number(params.get('id')) ?? 1;
    });
  }

  routeProduct(id: number) {
    this.router.navigate([`/persons/${id}`]);
  }
}
