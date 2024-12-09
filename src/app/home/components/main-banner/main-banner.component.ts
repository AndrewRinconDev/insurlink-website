import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    RouterLink,
  ],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css',
})
export class MainBannerComponent {
  constructor() {
    // this.isReady = true;
  }
}
