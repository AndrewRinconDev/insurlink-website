import { Component, inject, Input, OnInit } from '@angular/core';
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
import {
  cibWhatsapp,
  cibLinkedinIn,
  cibFacebookF,
  cibInstagram,
} from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../../../contacts/components/confirm-modal/confirm-modal.component';

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
    IconDirective,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  submitted = false;
  dialog = inject(MatDialog) as MatDialog;
  icons = { cibWhatsapp, cibLinkedinIn, cibFacebookF, cibInstagram };
  currentInsurer = insurersType[0];
  insurersType = insurersType;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    // identification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    message: new FormControl('', [Validators.maxLength(500)]),
    // department: new FormControl('', [Validators.required]),
    insureType: new FormControl('', [Validators.required]),
    termAndConditions: new FormControl(false, Validators.requiredTrue),
  });

  @Input() showContactForm = true;

  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  getInsurerByRoute(route?: string | null) {
    if (!route) return insurersType[0];

    return insurersType.find((insurer) => insurer.route == route) || insurersType[0];
  }

  getInsurerByValue(value?: string | null) {
    if (!value) return insurersType[0];

    return insurersType.find((insurer) => insurer.value == value) || insurersType[0];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const routeParam = params.get('category');

      if (routeParam) {
        this.currentInsurer = this.getInsurerByRoute(routeParam);
        this.contactForm.patchValue({ insureType: this.currentInsurer.value });
      }
    });
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '450px',
      data: data,
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.contactForm.valid) return;

    const insurerSelected = this.getInsurerByValue(this.contactForm.value.insureType);

    const notificationData = {
      ...this.contactForm.value,
      insurance: insurerSelected.label,
      contactEmail: 'andrew.rincon.94@gmail.com;lider.cumplimiento2@insurlink.com.co',
      // contactEmail: insurerSelected.contact.email,
      contactName: insurerSelected.contact.name,
    };

    this.notificationService.saveNotification(notificationData).subscribe(
      (response) => {
        this.openDialog({ icon: 'check_circle', title: '¡Información enviada!', message: 'Gracias por contactarnos, en breve nos pondremos en contacto contigo.' });
        this.submitted = false;
        this.contactForm.reset();
      },
      (error) => {
        console.error('Error sending notification', error);
        this.openDialog({ icon: 'cancel', title: '¡Error al enviar la información!', message: 'Por favor intenta de nuevo más tarde.' });
      }
    );
  }
}
