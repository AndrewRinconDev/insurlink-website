import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { personProductsData } from '../../../../constants/data/productData';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.css',
  animations: [
    trigger('bannerContent', [
      state(
        'hidden',
        style({
          transform: 'translateX(-100%)',
          display: 'none',
          opacity: 0,
        })
      ),
      state(
        'shown',
        style({
          transform: 'translateY(0%)',
        })
      ),
      transition('hidden => shown', [animate('0.5s')]),
    ]),
    trigger('bannerImage', [
      state(
        'hidden',
        style({
          transform: 'translateX(100%)',
          display: 'none',
          opacity: 0,
        })
      ),
      state(
        'shown',
        style({
          transform: 'translateY(0%)',
        })
      ),
      transition('hidden => shown', [animate('0.5s')]),
    ]),
  ],
})
export class ProductBannerComponent implements AfterViewInit, OnInit {
  selectedProductInfo: any;
  productsInfo = personProductsData;
  selectedProduct: number = 1;
  isInitialized: boolean = false;
  state = 'hidden';

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.showState();
  }

  showState() {
    setTimeout(() => {
      this.state = 'shown';
    }, 100);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.state = 'hidden';
      this.selectedProduct = Number(params.get('id')) ?? 1;
      this.getProductInfo(this.selectedProduct);
      this.isInitialized && this.showState();
    });

    this.isInitialized = true;
  }

  getProductInfo(id: number) {
    this.selectedProductInfo = this.productsInfo.find(
      (product) => product.id === id
    );
  }
}
