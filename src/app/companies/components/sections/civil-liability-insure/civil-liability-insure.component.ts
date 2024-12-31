import { Component } from '@angular/core';
import { civilLiabilityProductsData } from '../../../../../constants/data/productData';
import { MatIconModule } from '@angular/material/icon';
import { CoverageCardsComponent } from '../../../../common/components/coverage-cards/coverage-cards.component';

@Component({
  selector: 'app-civil-liability-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './civil-liability-insure.component.html',
  styleUrl: './civil-liability-insure.component.css'
})
export class CivilLiabilityInsureComponent {
  civilLiabilityProductsData = civilLiabilityProductsData;
}
