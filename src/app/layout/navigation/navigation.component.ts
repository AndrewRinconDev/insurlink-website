import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { DesktopNavigationComponent } from './desktop/desktopNavigation.component';
import { MobileNavigationComponent } from './mobile/mobileNavigation.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    DesktopNavigationComponent,
    MobileNavigationComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  openMobileMenu: boolean = false;

  constructor(public layoutService: LayoutService) {}

  toggleMobileMenu() {
    this.openMobileMenu = !this.openMobileMenu;
  }
}
