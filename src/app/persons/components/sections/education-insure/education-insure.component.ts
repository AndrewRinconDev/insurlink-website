import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { educationProductsData } from '../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-insure',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './education-insure.component.html',
  styleUrl: './education-insure.component.css'
})
export class EducationInsureComponent {
  educationProductsData = educationProductsData;
}
