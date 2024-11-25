import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css',
  animations: [
    trigger("myAnimationTrigger", [
      state('hidden', style({
        transform: 'translateX(-100%)', display:'none', opacity: 0})
      ), state('shown', style({
        transform: 'translateY(0%)'})
      ), transition('hidden => shown', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class MainBannerComponent implements AfterViewInit {
  state = 'hidden';

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'shown';
    }, 100);
  }

  constructor() {
    // this.isReady = true;
  }
}
