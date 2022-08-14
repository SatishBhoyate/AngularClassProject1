import { Component } from '@angular/core';

import { PRODUCTS } from './../../data/products';
import { Products } from './../../model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  title: string = 'Products goes here..';

  product = {
    prdName: 'Mobile',
    prdId: 1001,
  };

  products: Products[] = PRODUCTS;

  calcProds() {
    let sum = 0;
    for (let prod of this.products) {
      sum = sum + prod.inStock;
    }
    return sum;
  }
}
