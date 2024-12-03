import { Component } from '@angular/core';
import { AboutBannerComponent } from "../components/about-banner/about-banner.component";
import { OurMissionComponent } from "../components/our-mission/our-mission.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutBannerComponent, OurMissionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
