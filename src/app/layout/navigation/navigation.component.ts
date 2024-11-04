import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { companyOptions, generalOptions, groupLifeOptions, individualLifeOptions, navOptions, personOptions } from '../../../constants/navOptions';
import { CommonModule } from '@angular/common';

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
    RouterOutlet,
    RouterModule
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

  typeMenu: number = 1;// 1: person, 2: company

  selectTypeMenu(type: number) {
    this.typeMenu = type;
  }



  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;

  // someMethod() {
  //   this.trigger!.openMenu();
  // }
}
