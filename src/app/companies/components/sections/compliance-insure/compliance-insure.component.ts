import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { complianceProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-compliance-insure',
  standalone: true,
  imports: [CommonModule, MatIconModule, CoverageCardsComponent],
  templateUrl: './compliance-insure.component.html',
  styleUrl: './compliance-insure.component.css'
})
export class ComplianceInsureComponent {
  complianceProductsData = complianceProductsData;
}
