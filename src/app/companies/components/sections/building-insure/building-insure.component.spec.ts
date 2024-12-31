import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInsureComponent } from './building-insure.component';

describe('BuildingInsureComponent', () => {
  let component: BuildingInsureComponent;
  let fixture: ComponentFixture<BuildingInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
