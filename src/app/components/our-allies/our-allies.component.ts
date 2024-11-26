import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'app-our-allies',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './our-allies.component.html',
  styleUrl: './our-allies.component.css'
})
export class OurAlliesComponent implements OnInit {
  allies = [
    { name: 'Ally 1', image: '/images/insurlink-logo.png' },
    { name: 'Ally 2', image: '/images/insurlink-logo.png' },
    { name: 'Ally 3', image: '/images/insurlink-logo.png' },
    { name: 'Ally 4', image: '/images/insurlink-logo.png' }
  ];
  currentIndex = 0;

  get currentAlly() {
    return this.allies[this.currentIndex];
  }

  nextAlly() {
    this.currentIndex = (this.currentIndex + 1) % this.allies.length;
  }

  previousAlly() {
    this.currentIndex = (this.currentIndex - 1 + this.allies.length) % this.allies.length;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextAlly();
    }, 3000); // Change ally every 3 seconds
  }
}
