import { Component } from '@angular/core';
import { MainBannerComponent } from "../components/main-banner/main-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
