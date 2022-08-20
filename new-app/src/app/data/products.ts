import { Products } from './../model/products.model';
// const PI
export const PRODUCTS: Products[] = [
  {
    prdName: 'Mobile',
    prdId: 1001,
    inStock: 0,
    country: 'India',
    prdImg: './../../assets/images/sample-1.jpg',
    prdColor: 'red',
    isOutOfStock: false,
  },
  {
    prdName: 'Laptop',
    prdId: 1002,
    inStock: 10,
    country: 'Australia',
    prdImg: './../../assets/images/sample-1.jpg',
    prdColor: 'green',
    isOutOfStock: true,
  },
  {
    prdName: 'Book',
    prdId: 1003,
    inStock: 10,
    country: '',
    prdImg: './../../assets/images/sample-1.jpg',
    prdColor: 'blue',
    isOutOfStock: true,
  },
];
