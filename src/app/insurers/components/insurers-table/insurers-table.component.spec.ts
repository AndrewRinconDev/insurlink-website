import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurersTableComponent } from './insurers-table.component';

describe('InsurersTableComponent', () => {
  let component: InsurersTableComponent;
  let fixture: ComponentFixture<InsurersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
