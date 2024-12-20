import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { healthProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './health-insure.component.html',
  styleUrl: './health-insure.component.css'
})
export class HealthInsureComponent {
  healthProductsData = healthProductsData;
}
