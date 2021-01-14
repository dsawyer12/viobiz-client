import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellFilterComponent } from './cell-filter.component';

describe('CellFilterComponent', () => {
  let component: CellFilterComponent;
  let fixture: ComponentFixture<CellFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
