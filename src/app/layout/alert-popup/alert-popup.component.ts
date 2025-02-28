import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PopupContentComponent } from '../../common/popup-content/popup-content.component';

@Component({
  selector: 'app-alert-popup',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `<div></div>`,
  styleUrl: './alert-popup.component.css'
})
export class AlertPopupComponent implements OnInit {
  dialog = inject(MatDialog) as MatDialog;

  constructor() {}
  
  ngOnInit() {
    this.openDialog();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopupContentComponent, {
      width: '1000px',
      data: {
        title: 'Comunicado a la opinión pública',
        contents: [
          'En cumplimiento del Auto 9696 del 6 de febrero de 2025, de la Delegatura para Asuntos Jurisdiccionales de la Superintendencia de Industria y Comercio, en el expediente 24-506868, comunicamos a los interesados que la empresa RODSAN, ha iniciado una acción por actos de competencia desleal con una solicitud de medidas cautelares, que obligan a la sociedad INSURLINK y a la señora MARÍA ALEXANDRA PEÑA URREA a lo siguiente:',
          'Primera. Ordenar a la sociedad «INSURLINK» y a la señora MARÍA ALEXANDRA PEÑA URREA a que emitan un comunicado a sus clientes y a los ex trabajadores de la empresa «RODSAN» en el que indiquen que las aseveraciones realizadas sobre la quiebra y posible liquidación de esta última sociedad son incorrectas e inexactas y tuvieron como efecto la desorganización de la empresa. Asimismo, deberán emitir un comunicado al respecto en sus redes sociales y páginas web.',
          'Segunda. Ordenar a «INSURLINK», que emita una comunicación dirigida a todos los exclientes, tanto personas naturales como jurídicas, incluyendo compañías de seguros y asociados comerciales, de RODSAN que actualmente sean clientes de INSURLINK, notificándoles sobre las presentes medidas cautelares.',
          'Tercera. Ordenar a MARÍA ALEXANDRA PEÑA URREA que haga entrega del computador, Lenovo Port16, en aras de someter este equipo a una inspección judicial. Cuarta. Ordenar a MARIA ALEXANDRA PEÑA URREA y la sociedad «INSURLINK» la entrega inmediata de las líneas telefónicas 316 743 1819, 316 527 9166, y 316 690 8676, que fueron indebidamente puestas a nombre de esta última sociedad.',
          'Quinta. Ordenar a la sociedad «INSURLINK» que publique en su página web y en todas sus redes sociales (Instagram, LinkedIn y Facebook) un comunicado donde se difunda la medida cautelar indicando el nombre del despacho, la parte solicitante y solicitada, el número del radicado y las medidas decretadas.'
        ],
      },
    });
  }
}
