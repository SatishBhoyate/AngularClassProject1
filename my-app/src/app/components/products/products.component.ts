import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  title = 'Products goes here..';
  names = ['Alex', 'Ali', 'Ashitosh'];
  product = {
    prdName: 'Mobile',
    prdId: 1001,
  };

  products = [
    {
      prdName: 'Mobile',
      prdId: 1001,
      inStock: 8,
      country: 'India',
      prdImg: './../../assets/images/sample-1.jpg',
    },
    {
      prdName: 'Laptop',
      prdId: 1002,
      inStock: 10,
      country: 'Australia',
      prdImg: './../../assets/images/sample-1.jpg',
    },
    {
      prdName: 'Book',
      prdId: 1003,
      inStock: 0,
      country: '',
      prdImg: './../../assets/images/sample-1.jpg',
    },
  ];

  calcProds() {
    let sum = 0;
    for (let prod of this.products) {
      sum = sum + prod.inStock;
    }
    return sum;
  }
}
