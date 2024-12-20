import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { leaseProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lease-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './lease-insure.component.html',
  styleUrl: './lease-insure.component.css'
})
export class LeaseInsureComponent {
  leaseProductsData = leaseProductsData;
}
