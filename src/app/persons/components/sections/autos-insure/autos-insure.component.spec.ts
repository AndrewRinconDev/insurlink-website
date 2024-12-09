import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosInsureComponent } from './autos-insure.component';

describe('AutosInsureComponent', () => {
  let component: AutosInsureComponent;
  let fixture: ComponentFixture<AutosInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
