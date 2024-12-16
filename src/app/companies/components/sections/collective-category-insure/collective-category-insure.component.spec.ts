import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveCategoryInsureComponent } from './collective-category-insure.component';

describe('CollectiveCategoryInsureComponent', () => {
  let component: CollectiveCategoryInsureComponent;
  let fixture: ComponentFixture<CollectiveCategoryInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectiveCategoryInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectiveCategoryInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
