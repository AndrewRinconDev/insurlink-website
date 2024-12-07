import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryCardComponent } from './products-category-card.component';

describe('ProductsCategoryCardComponent', () => {
  let component: ProductsCategoryCardComponent;
  let fixture: ComponentFixture<ProductsCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCategoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
