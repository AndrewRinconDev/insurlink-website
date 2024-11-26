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
    { name: 'Mapfre', image: '/images/logos/mapfre.png' },
    { name: 'Allianz', image: '/images/logos/allianz.png' },
    { name: 'HDI', image: '/images/logos/hdi.png' },
    { name: 'Liberty Seguros', image: '/images/logos/liberty.png' },
    { name: 'Chubb', image: '/images/logos/chubb.png' },
    { name: 'BBVA', image: '/images/logos/bbva.png' },
    { name: 'SBS', image: '/images/logos/sbs.png' },
    { name: 'Mok Travel Assist', image: '/images/logos/mok.png' },
    { name: 'Axa Colpatria', image: '/images/logos/axa.png' },
    { name: 'Cesce', image: '/images/logos/cesce.png' },
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
