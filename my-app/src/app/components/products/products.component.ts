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
    },
    {
      prdName: 'Laptop',
      prdId: 1002,
    },
    {
      prdName: 'Book',
      prdId: 1003,
    },
  ];
}
