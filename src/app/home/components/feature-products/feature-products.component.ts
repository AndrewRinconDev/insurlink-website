import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './feature-products.component.html',
  styleUrl: './feature-products.component.css'
})
export class FeatureProductsComponent {
  goTop() {
    window.scrollTo(0, 0);
  }
}
