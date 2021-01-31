import { Component, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PriceList } from '../../../core/interfaces/price-list';

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

  types = ['Alloy Front A Arm Guards',
  'Alloy Rear A Arm Guards',
  'Alloy Roof',
  'Alloy Skid Plate Kit',
  'Cargo Tray',
  'Footwell Protection',
  'Front Bumper',
  'Front Bumper Kit',
  'Hood Rack',
  'Half Door',
  'Lower Door Inserts',
  'Plastic Front A Arm Guards',
  'Plastic Rear A Arm Guards',
  'Plastic Skid Plate Kit',
  'Radiator Relocation Kit',
  'Rear Bumper',
  'Rock Sliders'];

  productPriceLists: PriceList[];

  constructor(
    public priceListDialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }
}
