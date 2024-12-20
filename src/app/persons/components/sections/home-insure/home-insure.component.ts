import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { homeProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './home-insure.component.html',
  styleUrl: './home-insure.component.css'
})
export class HomeInsureComponent {
  homeProductsData = homeProductsData;
}
