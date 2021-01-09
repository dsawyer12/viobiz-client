import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  tabLinks: any[];
  activeTab: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.tabLinks = [
      {
        label: 'Details',
        path: './details',
        index: 0
      },
      {
        label: 'Fitment',
        path: './fitment',
        index: 1
      },
      {
        label: 'Media',
        path: './media',
        index: 2
      }
    ];
    this.activeTab = this.tabLinks[0];
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('_id');
    this.productService.getProduct(productId)
      .subscribe(product => this.product = product);
    this.router.navigate(['/product/details']);
  }

}
