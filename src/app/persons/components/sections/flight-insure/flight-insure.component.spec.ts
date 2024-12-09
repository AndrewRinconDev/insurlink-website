import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInsureComponent } from './flight-insure.component';

describe('FlightInsureComponent', () => {
  let component: FlightInsureComponent;
  let fixture: ComponentFixture<FlightInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
