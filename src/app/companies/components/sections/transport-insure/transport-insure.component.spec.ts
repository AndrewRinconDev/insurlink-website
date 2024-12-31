import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportInsureComponent } from './transport-insure.component';

describe('TransportInsureComponent', () => {
  let component: TransportInsureComponent;
  let fixture: ComponentFixture<TransportInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
