import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers = [
    { name: 'Gabrica', image: '/images/logos/gabrica.png' },
    { name: 'Ad Equipment', image: '/images/logos/add-equipment.png' },
    { name: 'Miniso', image: '/images/logos/miniso.png' },
    { name: 'Farmacias Simi', image: '/images/logos/farmacias-simi.png' },
    { name: 'Arrecife', image: '/images/logos/arrecife.png' },
    { name: 'Consultec', image: '/images/logos/consultec.png' },
    { name: 'Copava', image: '/images/logos/copava.png' },
    { name: 'Evertec', image: '/images/logos/evertec.png' },
    { name: 'Integra', image: '/images/logos/integra.png' },
    { name: 'Marketing Mix', image: '/images/logos/marketing-mix.png' },
    { name: 'Mullenlowe', image: '/images/logos/mullenlowe.png' },
    { name: 'Alfa Ingenieros', image: '/images/logos/alfa.png' },
    { name: 'Procesadora Colombiana de Carnes', image: '/images/logos/procesadora-colombiana.png' },
    { name: 'R&T', image: '/images/logos/r-and-t.png' },
    { name: 'VR Ingeniería', image: '/images/logos/vr-ing.png' },
  ];
}
