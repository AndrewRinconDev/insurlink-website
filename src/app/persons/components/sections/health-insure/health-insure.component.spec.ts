import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInsureComponent } from './health-insure.component';

describe('HealthInsureComponent', () => {
  let component: HealthInsureComponent;
  let fixture: ComponentFixture<HealthInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
