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
    },
    {
      prdName: 'Laptop',
      prdId: 1002,
      inStock: 10,
      country: 'Australia',
    },
    {
      prdName: 'Book',
      prdId: 1003,
      inStock: 0,
      country: '',
    },
  ];
}
