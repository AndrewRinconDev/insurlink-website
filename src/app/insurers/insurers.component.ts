import { Component } from '@angular/core';
import { InsurersTableComponent } from "./components/insurers-table/insurers-table.component";
import { OurAlliesComponent } from '../common/components/our-allies/our-allies.component';

@Component({
  selector: 'app-insurers',
  standalone: true,
  imports: [InsurersTableComponent, OurAlliesComponent],
  templateUrl: './insurers.component.html',
  styleUrl: './insurers.component.css'
})
export class InsurersComponent {
  
}
