import { Component } from '@angular/core';
import { MainBannerComponent } from "../components/main-banner/main-banner.component";
import { ProductsCategoryCardComponent } from "../components/products-category-card/products-category-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBannerComponent, ProductsCategoryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
