import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { companyOptions, generalOptions, groupLifeOptions, individualLifeOptions, navOptions, personOptions } from '../../../constants/navOptions';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuTrigger,
    MatMenuModule,
    MatSidenavModule,
    CommonModule,
    RouterModule,
    CdkAccordionModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navOptions = navOptions;
  individualLifeOptions = individualLifeOptions;
  groupLifeOptions = groupLifeOptions;
  generalOptions = generalOptions;
  personOptions = personOptions;
  companyOptions = companyOptions;

  openMobileMenu: boolean = false;

  constructor(public layoutService: LayoutService) {}

  toggleMobileMenu() {
    this.openMobileMenu = !this.openMobileMenu;
  }

  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;

  // someMethod() {
  //   this.trigger!.openMenu();
  // }
}
