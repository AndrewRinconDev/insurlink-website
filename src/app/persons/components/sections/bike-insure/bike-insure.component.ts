import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { bikeProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-bike-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './bike-insure.component.html',
  styleUrl: './bike-insure.component.css',
})
export class BikeInsureComponent {
  bikeProductsData = bikeProductsData;
}
