import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsureComponent } from './life-insure.component';

describe('LifeInsureComponent', () => {
  let component: LifeInsureComponent;
  let fixture: ComponentFixture<LifeInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
