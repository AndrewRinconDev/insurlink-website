import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '@coreui/angular';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, ButtonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  confirmData: any = {};
  dialogRef = inject(MatDialogRef<ConfirmModalComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.confirmData = data;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
