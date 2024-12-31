import { Component } from '@angular/core';
import { buildingProductsData } from '../../../../../constants/data/productData';
import { MatIconModule } from '@angular/material/icon';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-building-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './building-insure.component.html',
  styleUrl: './building-insure.component.css'
})
export class BuildingInsureComponent {
  buildingProductsData = buildingProductsData;
}
