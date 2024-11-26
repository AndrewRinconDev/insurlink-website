import { Component } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insurlink-website';
}
