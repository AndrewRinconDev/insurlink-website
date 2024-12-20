import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { pensionProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pension-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './pension-insure.component.html',
  styleUrl: './pension-insure.component.css'
})
export class PensionInsureComponent {
  pensionProductsData = pensionProductsData;
}
