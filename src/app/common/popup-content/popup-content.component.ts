import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-popup-content',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './popup-content.component.html',
  styleUrl: './popup-content.component.css'
})
export class PopupContentComponent {
  dialogRef = inject(MatDialogRef<PopupContentComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
