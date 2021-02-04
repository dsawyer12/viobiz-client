import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { NgxModule } from './ngx/ngx.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    MaterialModule,
    NgxModule
  ],
})
export class SharedModule { }
