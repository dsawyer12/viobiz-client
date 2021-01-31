import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { QuillModule } from 'ngx-quill';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFitmentComponent } from './components/product-fitment/product-fitment.component';
import { ProductMediaComponent } from './components/product-media/product-media.component';
import { CellFilterComponent } from './components/cell-filter/cell-filter.component';

@NgModule({
  declarations: [
    SidenavComponent,
    DataGridComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFitmentComponent,
    ProductMediaComponent,
    CellFilterComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([
      CellFilterComponent
    ]),
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ]
})
export class AdminModule { }
