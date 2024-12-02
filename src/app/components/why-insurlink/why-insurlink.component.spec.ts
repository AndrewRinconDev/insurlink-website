import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInsurlinkComponent } from './why-insurlink.component';

describe('WhyInsurlinkComponent', () => {
  let component: WhyInsurlinkComponent;
  let fixture: ComponentFixture<WhyInsurlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyInsurlinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyInsurlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
