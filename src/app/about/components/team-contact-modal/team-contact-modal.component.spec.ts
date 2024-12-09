import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamContactModalComponent } from './team-contact-modal.component';

describe('TeamContactModalComponent', () => {
  let component: TeamContactModalComponent;
  let fixture: ComponentFixture<TeamContactModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamContactModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
