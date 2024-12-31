import { Component } from '@angular/core';
import { financialProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from '../../../../common/components/coverage-cards/coverage-cards.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-financial-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './financial-insure.component.html',
  styleUrl: './financial-insure.component.css'
})
export class FinancialInsureComponent {
  financialProductsData = financialProductsData;
}
