import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Do i need this in this module too?
// import {RouterModule} from '@angular/router';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    // RouterModule,
    CommonModule,
    MaterialModule,
  ],
})
export class SharedModule { }
