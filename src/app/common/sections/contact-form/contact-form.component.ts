import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { insurersType } from '../../../../constants/data/insurersType';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { cibWhatsapp, cibLinkedin, cibFacebook, cibInstagram } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    IconDirective
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  submitted = false;
  icons = { cibWhatsapp, cibLinkedin, cibFacebook, cibInstagram };
  insurersType = insurersType;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    // identification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
    message: new FormControl(),
    // department: new FormControl('', [Validators.required]),
    insureType: new FormControl('', Validators.required),
    termAndConditions: new FormControl(false, Validators.requiredTrue),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const routeParam = params.get('category');

      if (routeParam) {
        const currentInsure = insurersType.find((insurer) => insurer.route == routeParam);
        this.contactForm.patchValue({ insureType: currentInsure?.value });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.contactForm.valid) return;

    console.log(this.contactForm.value);
  }
}
