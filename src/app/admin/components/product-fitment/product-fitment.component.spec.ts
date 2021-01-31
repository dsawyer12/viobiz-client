import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFitmentComponent } from './product-fitment.component';

describe('ProductFitmentComponent', () => {
  let component: ProductFitmentComponent;
  let fixture: ComponentFixture<ProductFitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
