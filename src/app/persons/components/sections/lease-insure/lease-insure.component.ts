import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { leaseProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-lease-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './lease-insure.component.html',
  styleUrl: './lease-insure.component.css'
})
export class LeaseInsureComponent {
  leaseProductsData = leaseProductsData;
}
