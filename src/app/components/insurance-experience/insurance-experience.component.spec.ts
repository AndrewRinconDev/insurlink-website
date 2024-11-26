import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceExperienceComponent } from './insurance-experience.component';

describe('InsuranceExperienceComponent', () => {
  let component: InsuranceExperienceComponent;
  let fixture: ComponentFixture<InsuranceExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
