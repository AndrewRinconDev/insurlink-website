import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCategoryInsureComponent } from './life-category-insure.component';

describe('LifeCategoryInsureComponent', () => {
  let component: LifeCategoryInsureComponent;
  let fixture: ComponentFixture<LifeCategoryInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCategoryInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCategoryInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
