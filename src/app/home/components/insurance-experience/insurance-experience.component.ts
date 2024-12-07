import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { insuranceExperienceData } from '../../../../constants/data/insuranceExperienceData';

@Component({
  selector: 'app-insurance-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-experience.component.html',
  styleUrl: './insurance-experience.component.css'
})
export class InsuranceExperienceComponent {
  insuranceExperienceData = insuranceExperienceData;
}
