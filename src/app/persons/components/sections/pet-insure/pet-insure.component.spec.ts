import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInsureComponent } from './pet-insure.component';

describe('PetInsureComponent', () => {
  let component: PetInsureComponent;
  let fixture: ComponentFixture<PetInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
