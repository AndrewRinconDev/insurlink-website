import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-contact-modal',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './team-contact-modal.component.html',
  styleUrl: './team-contact-modal.component.css'
})
export class TeamContactModalComponent {
  dialogRef = inject(MatDialogRef<TeamContactModalComponent>);
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
      console.log(data);
    }

    closeDialog(): void {
      this.dialogRef.close();
    }
}
