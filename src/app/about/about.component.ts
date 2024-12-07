import { Component } from '@angular/core';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { OurValuesComponent } from './components/our-values/our-values.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutBannerComponent, OurMissionComponent, OurHistoryComponent, OurValuesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
