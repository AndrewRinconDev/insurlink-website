import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { healthProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-health-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './health-insure.component.html',
  styleUrl: './health-insure.component.css'
})
export class HealthInsureComponent {
  healthProductsData = healthProductsData;
}
