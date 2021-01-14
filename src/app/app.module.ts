import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// material
import { MaterialModule } from './material/material.module';
// ag-grid
import { AgGridModule } from 'ag-grid-angular';
// ngx-quill editor
import { QuillModule } from 'ngx-quill';

// components
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFitmentComponent } from './components/product-fitment/product-fitment.component';
import { ProductMediaComponent } from './components/product-media/product-media.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CellFilterComponent } from './component-utils/cell-filter/cell-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFitmentComponent,
    ProductMediaComponent,
    SidenavComponent,
    CellFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgGridModule.withComponents([
      CellFilterComponent
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
