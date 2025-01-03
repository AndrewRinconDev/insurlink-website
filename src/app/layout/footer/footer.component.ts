import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { cibLinkedinIn, cibFacebookF, cibInstagram } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconDirective, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  icons = { cibLinkedinIn, cibFacebookF, cibInstagram };
  
  goTop() {
    window.scrollTo(0, 0);
  }
}
