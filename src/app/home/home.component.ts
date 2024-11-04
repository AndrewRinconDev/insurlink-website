import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatDivider, MatButtonModule, MatMenuModule, MatMenuTrigger, CdkAccordionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
