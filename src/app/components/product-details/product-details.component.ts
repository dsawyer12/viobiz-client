import { Component, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PriceList } from '../../interfaces/price-list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productName = new FormControl('');
  sku = new FormControl('');
  productType = new FormControl('');
  brand = new FormControl('');
  supplier = new FormControl('');
  length = new FormControl();
  width = new FormControl();
  height = new FormControl();
  weight = new FormControl();
  wholesale = new FormControl();
  buy = new FormControl();
  retail = new FormControl();

  productPriceLists: PriceList[];

  constructor(
    public priceListDialog: MatDialog
  ) {
  }

  ngOnInit(): void {

  }
}
