import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeInsureComponent } from './bike-insure.component';

describe('BikeInsureComponent', () => {
  let component: BikeInsureComponent;
  let fixture: ComponentFixture<BikeInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
