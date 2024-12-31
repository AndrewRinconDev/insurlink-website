import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  companyProductsData,
  personProductsData,
} from '../../../../constants/data/productData';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
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
  @Input()
  isPerson: boolean = true;

  selectedProductInfo: any;
  selectedProduct: number = 1;
  isInitialized: boolean = false;
  productsInfo: any[] = [];
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
    this.productsInfo = this.isPerson
      ? personProductsData
      : companyProductsData;

    this.route.paramMap.subscribe((params) => {
      this.state = 'hidden';
      const routeParam = params.get('category') ?? 'vida';
      this.getProductInfo(routeParam);
      this.isInitialized && this.showState();
    });

    this.isInitialized = true;
  }

  getProductInfo(category: string) {
    this.selectedProductInfo = this.productsInfo.find(
      (option) => option.shortName.toLowerCase() == category
    );
  }
}
