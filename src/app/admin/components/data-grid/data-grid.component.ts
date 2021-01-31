import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product/product.service';
import { CellFilterComponent } from '../cell-filter/cell-filter.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowSelection;
  paginationPageSize;
  paginationNumberFormatter;
  rowData: Product[];

  selectedProduct: number;

  frameworkComponents = {
    /* custom filtering component */
    cellFilterComponent: CellFilterComponent,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.columnDefs = [
      { field: '_id' },
      { field: 'name', flex: 1, filter: 'cellFilterComponent' },
      { field: 'type' },
      { field: 'sku' },
      { field: 'brand' },
      { field: 'supplier' },
      // { field: 'dimensions' },
      // { field: 'weight' },
      { field: 'stockOnHand' },
      { field: 'availableStock' },
      // { field: 'shortDescription' },
      // { field: 'description' },
      // { field: 'fitment' },
      // { field: 'link' }
    ];

    this.defaultColDef = {
      minWidth: 120,
      resizable: true,
      sortable: true,
      filter: true,
      menuTabs: ['filterMenuTab']
    };
    this.rowSelection = 'single';
    this.paginationNumberFormatter = (params) => {
      return '[' + params.value.toLocaleString() + ']';
    };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedProduct = params._id;
    });
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((res: Product[]) => {
        this.rowData = res;
      });
  }

  onGridReady(params): void {
    console.log('grid is ready');
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getProducts();
    this.gridApi.sizeColumnsToFit();
  }

  onRowSelected(event): void {
    if ( event.node && event.node.selected ) {
      const id = event.node.data._id;
      // this.router.navigate([`/product/${id}`]);
      this.router.navigate([`/product/${id}`]);
    }

    // this.productService.setProduct(event.node.data._id);
    // const x = this.productService.getProduct(event.node.data._id);
    // console.log(x);
    // this.router.navigateByUrl('/new-product/details');

    // const p: Product = event.node.data;
    // const productId = p ? p._id : null;
    // this.router.navigate(['/product', { id: productId }]);

    // this.router.navigateByUrl('/product, product._id');
  }

}
