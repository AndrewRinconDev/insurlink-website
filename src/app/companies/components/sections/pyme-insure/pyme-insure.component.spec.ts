import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymeInsureComponent } from './pyme-insure.component';

describe('PymeInsureComponent', () => {
  let component: PymeInsureComponent;
  let fixture: ComponentFixture<PymeInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PymeInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymeInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
