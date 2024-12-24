import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import {Clipboard} from '@angular/cdk/clipboard';
import { allTeamMembers } from '../../../../constants/data/teamMembers';
import { MatTooltipModule } from '@angular/material/tooltip';
import { cibWhatsapp } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-team-contact-modal',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, IconDirective],
  templateUrl: './team-contact-modal.component.html',
  styleUrl: './team-contact-modal.component.css',
})
export class TeamContactModalComponent implements OnInit {
  memberInfo: any | null = null;
  icons = { cibWhatsapp };
  dialogRef = inject(MatDialogRef<TeamContactModalComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private clipboard: Clipboard) {
    this.memberInfo = allTeamMembers.find((member) => member.id === data.memberId);
  }
  
  ngOnInit(): void {
    if (!this.memberInfo) {
      this.closeDialog();
    }
  }

  copyToClipboard(value: string): void {
    this.clipboard.copy(value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
