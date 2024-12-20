import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { educationProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-education-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './education-insure.component.html',
  styleUrl: './education-insure.component.css'
})
export class EducationInsureComponent {
  educationProductsData = educationProductsData;
}
