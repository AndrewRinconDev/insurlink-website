import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { pensionProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-pension-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './pension-insure.component.html',
  styleUrl: './pension-insure.component.css'
})
export class PensionInsureComponent {
  pensionProductsData = pensionProductsData;
}
