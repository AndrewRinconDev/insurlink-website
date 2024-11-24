import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { navOptions } from '../../../../constants/navOptions';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../services/layout.service';
import { NavOption } from '../../../../constants/navOptions.interface';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './mobileNavigation.component.html',
  styleUrl: './mobileNavigation.component.css',
})
export class MobileNavigationComponent implements OnInit {
  navOptions = navOptions;
  isOpenProductMenu: boolean = false;
  ProductOption?: NavOption = {} as NavOption;
  submenuOption?: NavOption = {} as NavOption;

  @Input()
  isOpenMobileMenu: boolean = false;

  @Input()
  toggleMobileMenu!: Function;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    // this.isOpenSubmenu = false;
  }

  setPersonsType() {
    this.layoutService.setTypeMenu(1);
    this.toggleProductMenu(1);
  }

  setCompanyType() {
    this.layoutService.setTypeMenu(2);
    this.toggleProductMenu(2);
  }

  toggleProductMenu(type: number) {
    this.isOpenProductMenu = true;    
    this.ProductOption = navOptions.find((option) => option.id === type);
  }
}
