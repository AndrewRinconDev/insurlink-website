import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseInsureComponent } from './lease-insure.component';

describe('LeaseInsureComponent', () => {
  let component: LeaseInsureComponent;
  let fixture: ComponentFixture<LeaseInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaseInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
