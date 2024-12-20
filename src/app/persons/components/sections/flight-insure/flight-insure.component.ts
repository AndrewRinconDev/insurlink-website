import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { travelProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './flight-insure.component.html',
  styleUrl: './flight-insure.component.css'
})
export class FlightInsureComponent {
  travelProductsData = travelProductsData;
}
