import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { LayoutService } from '../../../services/layout.service';
import { companyOptions, individualLifeOptions, groupLifeOptions, generalOptions, personOptions } from '../../../../constants/navOptions';

@Component({
  selector: 'app-desktop-navigation',
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
  templateUrl: './desktopNavigation.component.html',
  styleUrl: './desktopNavigation.component.css',
})
export class DesktopNavigationComponent {
  companyOptions = companyOptions;
  personOptions = personOptions;
  individualLifeOptions = individualLifeOptions;
  groupLifeOptions = groupLifeOptions;
  generalOptions = generalOptions;  
  openMobileMenu: boolean = false;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    
    // console.log('PersonsComponent', {test: this.linkActive});
  }

  goTop() {
    window.scrollTo(0, 0);
  }
}
