import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { petProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-pet-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './pet-insure.component.html',
  styleUrl: './pet-insure.component.css'
})
export class PetInsureComponent {
  petProductsData = petProductsData;
}
