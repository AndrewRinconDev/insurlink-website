import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  form = new FormGroup({
    name: new FormControl(),
    identification: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    department: new FormControl(),
    insureType: new FormControl(),
    termAndConditions: new FormControl()
  });
}
