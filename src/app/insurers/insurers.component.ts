import { Component } from '@angular/core';
import { InsurersTableComponent } from "./components/insurers-table/insurers-table.component";

@Component({
  selector: 'app-insurers',
  standalone: true,
  imports: [InsurersTableComponent],
  templateUrl: './insurers.component.html',
  styleUrl: './insurers.component.css'
})
export class InsurersComponent {
  
}
