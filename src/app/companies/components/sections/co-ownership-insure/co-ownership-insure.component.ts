import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { copropietiesProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-co-ownership-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './co-ownership-insure.component.html',
  styleUrl: './co-ownership-insure.component.css'
})
export class CoOwnershipInsureComponent {
  copropietiesProductsData = copropietiesProductsData;
}
