import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { petProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './pet-insure.component.html',
  styleUrl: './pet-insure.component.css'
})
export class PetInsureComponent {
  petProductsData = petProductsData;
}
