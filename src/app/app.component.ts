import { Component } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { AlertPopupComponent } from './layout/alert-popup/alert-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FooterComponent, AlertPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insurlink-website';
}
