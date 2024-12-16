import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOwnershipInsureComponent } from './co-ownership-insure.component';

describe('CoOwnershipInsureComponent', () => {
  let component: CoOwnershipInsureComponent;
  let fixture: ComponentFixture<CoOwnershipInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoOwnershipInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoOwnershipInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
