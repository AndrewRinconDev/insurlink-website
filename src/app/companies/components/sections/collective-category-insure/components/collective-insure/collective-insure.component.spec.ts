import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveInsureComponent } from './collective-insure.component';

describe('CollectiveInsureComponent', () => {
  let component: CollectiveInsureComponent;
  let fixture: ComponentFixture<CollectiveInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectiveInsureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectiveInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
