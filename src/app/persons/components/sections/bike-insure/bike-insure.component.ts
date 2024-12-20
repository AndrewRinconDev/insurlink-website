import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { bikeProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bike-insure',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './bike-insure.component.html',
  styleUrl: './bike-insure.component.css'
})
export class BikeInsureComponent {
  bikeProductsData= bikeProductsData;
}
