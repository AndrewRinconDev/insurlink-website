import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilLiabilityInsureComponent } from './civil-liability-insure.component';

describe('CivilLiabilityComponent', () => {
  let component: CivilLiabilityInsureComponent;
  let fixture: ComponentFixture<CivilLiabilityInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilLiabilityInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilLiabilityInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
