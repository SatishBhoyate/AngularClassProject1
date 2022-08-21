import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

import { PRODUCTS } from './../../data/products';
import { Products } from './../../model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  totPrds: number = 0;
  // var sharedService = new SharedService();
  constructor(private sharedService: SharedService) {
    this.totPrds = this.sharedService.calcProds(this.products);
  } // D.I.
  title: string = 'Products goes here..';

  product = {
    prdName: 'Mobile',
    prdId: 1001,
  };

  products: Products[] = PRODUCTS;

  /*
  lificy
  dir
  routes
  api
  forms
  */

  addPrd(prd) {
    // console.log(' prd', prd);
    if (prd.qntt < prd.inStock) prd.qntt++;
    // alert('add prd');
  }

  removePrd(prd) {
    if (prd.qntt !== 0) prd.qntt--;
    // console.log(' prd', prd);
    // alert('remove prd');
  }
}
