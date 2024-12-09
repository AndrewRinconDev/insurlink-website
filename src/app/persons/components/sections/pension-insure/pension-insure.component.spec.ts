import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionInsureComponent } from './pension-insure.component';

describe('PensionInsureComponent', () => {
  let component: PensionInsureComponent;
  let fixture: ComponentFixture<PensionInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensionInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
