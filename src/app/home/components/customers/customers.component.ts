import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers = [
    { name: 'Gabrica', image: '/images/logos/gabrica.png' },
    { name: 'Miniso', image: '/images/logos/miniso.png' },
    { name: 'Farmacias Simi', image: '/images/logos/farmacias-simi.png' },
    { name: 'Arrecife', image: '/images/logos/arrecife.png' },
    { name: 'Consultec', image: '/images/logos/consultec.png' },
    { name: 'Copava', image: '/images/logos/copava.png' },
    { name: 'Evertec', image: '/images/logos/evertec.png' },
    { name: 'Integra', image: '/images/logos/integra.png' },
    { name: 'Marketing Mix', image: '/images/logos/marketing-mix.png' },
    { name: 'Mullenlowe', image: '/images/logos/mullenlowe.png' },
    { name: 'R&T', image: '/images/logos/r-and-t.png' },
    { name: 'VR Ingeniería', image: '/images/logos/vr-ing.jpg' },
  ];
}
