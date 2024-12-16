import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceInsureComponent } from './compliance-insure.component';

describe('ComplianceInsureComponent', () => {
  let component: ComplianceInsureComponent;
  let fixture: ComponentFixture<ComplianceInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
