import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { carProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-autos-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './autos-insure.component.html',
  styleUrl: './autos-insure.component.css'
})
export class AutosInsureComponent {
  carProductsData = carProductsData;
}
