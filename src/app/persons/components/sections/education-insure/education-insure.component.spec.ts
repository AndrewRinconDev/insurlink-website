import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInsureComponent } from './education-insure.component';

describe('EducationInsureComponent', () => {
  let component: EducationInsureComponent;
  let fixture: ComponentFixture<EducationInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
