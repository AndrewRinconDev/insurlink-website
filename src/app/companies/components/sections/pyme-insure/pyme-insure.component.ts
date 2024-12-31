import { Component } from '@angular/core';
import { pymeProductsData } from '../../../../../constants/data/productData';
import { MatIconModule } from '@angular/material/icon';
import { CoverageCardsComponent } from '../../../../common/components/coverage-cards/coverage-cards.component';

@Component({
  selector: 'app-pyme-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './pyme-insure.component.html',
  styleUrl: './pyme-insure.component.css'
})
export class PymeInsureComponent {
  pymeProductsData = pymeProductsData;
}
