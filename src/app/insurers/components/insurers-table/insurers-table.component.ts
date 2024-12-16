import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { insurersDirectory } from '../../../../constants/data/insurersDirectory';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '@coreui/angular';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-insurers-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, ButtonModule, MatTooltipModule],
  templateUrl: './insurers-table.component.html',
  styleUrl: './insurers-table.component.css'
})
export class InsurersTableComponent {
  displayedColumns: string[] = ['name', 'mobile', 'local', 'national', 'link'];
  dataSource = insurersDirectory;
}
