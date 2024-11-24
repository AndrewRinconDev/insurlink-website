import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { personProductsData } from '../../../../constants/data/productData';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.css',
})
export class ProductBannerComponent {
  selectedProductInfo: any;
  productsInfo = personProductsData;
  selectedProduct: number = 1;

  constructor(private personService: PersonService) {
    this.personService.selectedPersonProduct.subscribe((id) => {
      this.selectedProduct = id;
      this.getProductInfo(id);
    });
  }

  ngOnInit() {
    this.getProductInfo(this.selectedProduct);
  }

  getProductInfo(id: number) {
    this.selectedProductInfo = this.productsInfo.find(
      (product) => product.id === id
    );
  }
}
