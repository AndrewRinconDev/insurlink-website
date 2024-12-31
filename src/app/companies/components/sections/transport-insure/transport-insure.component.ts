import { Component } from '@angular/core';
import { transportProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from '../../../../common/components/coverage-cards/coverage-cards.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transport-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './transport-insure.component.html',
  styleUrl: './transport-insure.component.css'
})
export class TransportInsureComponent {
  transportProductsData = transportProductsData;
}
