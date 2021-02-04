import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SidenavComponent} from './components/sidenav/sidenav.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFitmentComponent } from './components/product-fitment/product-fitment.component';
import { ProductMediaComponent } from './components/product-media/product-media.component';

const routes: Routes = [
  { path: '', component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: DataGridComponent },
      { path: 'product/:_id',
        component: ProductComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: ProductDetailsComponent },
          { path: 'fitment', component: ProductFitmentComponent },
          { path: 'media', component: ProductMediaComponent }
        ]
      },
    ] },
  // { path: '**', redirectTo: 'inventory' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
