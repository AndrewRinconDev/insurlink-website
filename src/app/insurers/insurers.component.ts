import { Component } from '@angular/core';
import { InsurersTableComponent } from "./components/insurers-table/insurers-table.component";
import { OurAlliesComponent } from '../common/components/our-allies/our-allies.component';
import { ContactFormComponent } from "../common/sections/contact-form/contact-form.component";

@Component({
  selector: 'app-insurers',
  standalone: true,
  imports: [InsurersTableComponent, OurAlliesComponent, ContactFormComponent],
  templateUrl: './insurers.component.html',
  styleUrl: './insurers.component.css'
})
export class InsurersComponent {
  
}
