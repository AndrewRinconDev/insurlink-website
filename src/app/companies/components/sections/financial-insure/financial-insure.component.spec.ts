import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInsureComponent } from './financial-insure.component';

describe('FinancialInsureComponent', () => {
  let component: FinancialInsureComponent;
  let fixture: ComponentFixture<FinancialInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
