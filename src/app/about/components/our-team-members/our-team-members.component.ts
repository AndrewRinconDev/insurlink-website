import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { TeamContactModalComponent } from '../team-contact-modal/team-contact-modal.component';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { teamMembers1, teamMembers2, teamMembers3 } from '../../../../constants/data/teamMembers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team-members',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    RouterLink
  ],
  templateUrl: './our-team-members.component.html',
  styleUrl: './our-team-members.component.css',
})
export class OurTeamMembersComponent {
  selectedCategoryMember: number = 1;
  teamMembers1 = teamMembers1;
  teamMembers2 = teamMembers2;
  teamMembers3 = teamMembers3;
  dialog = inject(MatDialog) as MatDialog;

  constructor() {}

  routeCategoryMember(id: number) {
    this.selectedCategoryMember = id;
  }

  openDialog(memberId: number): void {
    const dialogRef = this.dialog.open(TeamContactModalComponent, {
      width: '450px',
      data: { memberId: memberId },
    });
  }
}
