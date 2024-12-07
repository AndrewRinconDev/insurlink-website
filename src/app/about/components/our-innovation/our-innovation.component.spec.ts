import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInnovationComponent } from './our-innovation.component';

describe('OurInnovationComponent', () => {
  let component: OurInnovationComponent;
  let fixture: ComponentFixture<OurInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurInnovationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
