import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsureComponent } from './home-insure.component';

describe('HomeInsureComponent', () => {
  let component: HomeInsureComponent;
  let fixture: ComponentFixture<HomeInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
