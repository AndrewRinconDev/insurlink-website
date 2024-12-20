import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { homeProductsData } from '../../../../../constants/data/productData';
import { CoverageCardsComponent } from "../../../../common/components/coverage-cards/coverage-cards.component";

@Component({
  selector: 'app-home-insure',
  standalone: true,
  imports: [MatIconModule, CoverageCardsComponent],
  templateUrl: './home-insure.component.html',
  styleUrl: './home-insure.component.css'
})
export class HomeInsureComponent {
  homeProductsData = homeProductsData;
}
