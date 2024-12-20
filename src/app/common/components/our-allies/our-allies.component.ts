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
    { name: 'Sura', image: '/images/logos/sura.png' },
    { name: 'Aseguradora Solidaria', image: '/images/logos/solidaria.png' },
    { name: 'Aurora seguros de vida', image: '/images/logos/aurora.png' },
    { name: 'Mapfre', image: '/images/logos/mapfre.png' },
    { name: 'Berkley', image: '/images/logos/berkley.png' },
    { name: 'Seguros Bolivar', image: '/images/logos/bolivar.png' },
    { name: 'Colmedica', image: '/images/logos/colmedica.png' },
    { name: 'Colsanitas', image: '/images/logos/colsanitas.png' },
    { name: 'Equidad Seguros', image: '/images/logos/equidad.png' },
    { name: 'Colmena Seguros', image: '/images/logos/colmena.png' },
    { name: 'Confianza Seguros', image: '/images/logos/confianza.png' },
    { name: 'Seguros del Estado', image: '/images/logos/estado.png' },
    { name: 'JMalucelli', image: '/images/logos/jmalucelli.png' },
  ];
  allies2 = [
    { name: 'Seguros Mundial', image: '/images/logos/mundial.png' },
    { name: 'Nacional de seguros', image: '/images/logos/nacional-de-seguros.png' },
    { name: 'Previsora', image: '/images/logos/previsora.png' },
    { name: 'Aseguradora Solidaria', image: '/images/logos/solidaria.png' },
    { name: 'Zurich', image: '/images/logos/zurich.png' },
    { name: 'Allianz', image: '/images/logos/allianz.png' },
    { name: 'HDI', image: '/images/logos/hdi.png' },
    { name: 'Liberty Seguros', image: '/images/logos/liberty.png' },
    { name: 'Chubb', image: '/images/logos/chubb.png' },
    { name: 'BBVA', image: '/images/logos/bbva.png' },
    { name: 'SBS', image: '/images/logos/sbs.png' },
    // { name: 'Mok Travel Assist', image: '/images/logos/mok.png' },
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
