import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { copropietiesProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-co-ownership-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './co-ownership-insure.component.html',
  styleUrl: './co-ownership-insure.component.css'
})
export class CoOwnershipInsureComponent {
  copropietiesProductsData = copropietiesProductsData;
}
