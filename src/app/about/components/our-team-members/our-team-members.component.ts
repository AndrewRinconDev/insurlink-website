import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { TeamContactModalComponent } from '../team-contact-modal/team-contact-modal.component';

@Component({
  selector: 'app-our-team-members',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatButtonModule],
  templateUrl: './our-team-members.component.html',
  styleUrl: './our-team-members.component.css'
})
export class OurTeamMembersComponent {
  selectedCategoryMember: number = 1;
  dialog = inject(MatDialog) as MatDialog;

  constructor() {}

  routeCategoryMember(id: number) {
    this.selectedCategoryMember = id;
  }


  openDialog(memberId: number): void {
    const dialogRef = this.dialog.open(TeamContactModalComponent, {
      width: '450px',
      data: {memberId: memberId}
    });
  }
}
