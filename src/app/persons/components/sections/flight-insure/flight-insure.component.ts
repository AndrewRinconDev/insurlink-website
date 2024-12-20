import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { travelProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-flight-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './flight-insure.component.html',
  styleUrl: './flight-insure.component.css'
})
export class FlightInsureComponent {
  travelProductsData = travelProductsData;
}
