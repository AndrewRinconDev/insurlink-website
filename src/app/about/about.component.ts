import { Component, OnInit } from '@angular/core';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
// import { OurInnovationComponent } from './components/our-innovation/our-innovation.component';
import { OurTeamMembersComponent } from './components/our-team-members/our-team-members.component';
import { ContactFormComponent } from "../common/sections/contact-form/contact-form.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutBannerComponent,
    OurMissionComponent,
    OurHistoryComponent,
    OurValuesComponent,
    OurTeamComponent,
    // OurInnovationComponent,
    OurTeamMembersComponent,
    ContactFormComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
