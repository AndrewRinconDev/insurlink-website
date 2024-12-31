import { Component } from '@angular/core';
import { ContactFormComponent } from "../common/sections/contact-form/contact-form.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
