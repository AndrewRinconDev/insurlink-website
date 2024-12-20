import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { carProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autos-insure',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './autos-insure.component.html',
  styleUrl: './autos-insure.component.css'
})
export class AutosInsureComponent {
  carProductsData = carProductsData;
}
