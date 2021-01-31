import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Vehicle } from 'src/app/core/interfaces/Vehicle';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-fitment',
  templateUrl: './product-fitment.component.html',
  styleUrls: ['./product-fitment.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductFitmentComponent implements OnInit {
  yearSelect = new FormControl('', Validators.required);
  makeSelect = new FormControl('', Validators.required);
  modelSelect = new FormControl('', Validators.required);

  yearRange: number[] = [2013, 2014, 2015, 2016, 2017, 2018];
  makeRange: string[] = ['Can-Am'];
  modelRange: string[] = ['Maverick',
    'Maverick 1000 X MR',
    'Maverick 1000R',
    'Maverick 1000R DPS',
    'Maverick 1000R TURBO',
    'Maverick 1000R TURBO X DS',
    'Maverick 1000R TURBO X RS',
    'Maverick 1000R X DS',
    'Maverick 1000R X MR',];

  fitments: Vehicle[] = [
    { _id: '1', make: 'Can-Am', model: 'Maverick', year: [2013, 2014, 2015, 2016, 2017, 2018] },
    { _id: '2', make: 'Can-Am', model: 'Maverick 1000 X MR', year: [2014] },
    { _id: '3', make: 'Can-Am', model: 'Maverick 1000R', year: [2013, 2014, 2015, 2016] },
    { _id: '4', make: 'Can-Am', model: 'Maverick 1000R DPS', year: [2016, 2017, 2018] },
    { _id: '5', make: 'Can-Am', model: 'Maverick 1000R TURBO', year: [2016, 2017] },
    { _id: '6', make: 'Can-Am', model: 'Maverick 1000R TURBO X DS', year: [2015, 2016] },
    { _id: '7', make: 'Can-Am', model: 'Maverick 1000R TURBO X RS', year: [2016] },
    { _id: '8', make: 'Can-Am', model: 'Maverick 1000R X DS', year: [2015, 2016] },
    { _id: '9', make: 'Can-Am', model: 'Maverick 1000R X MR', year: [2015, 2016, 2017] }
  ];
  expandedElement: Vehicle | null;
  colHeaders: string[] = ['make', 'model', 'year', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
