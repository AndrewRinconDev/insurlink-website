import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamMembersComponent } from './our-team-members.component';

describe('OurTeamMembersComponent', () => {
  let component: OurTeamMembersComponent;
  let fixture: ComponentFixture<OurTeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTeamMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
