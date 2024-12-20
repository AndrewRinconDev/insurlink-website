import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageCardsComponent } from './coverage-cards.component';

describe('CoverageCardsComponent', () => {
  let component: CoverageCardsComponent;
  let fixture: ComponentFixture<CoverageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverageCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
