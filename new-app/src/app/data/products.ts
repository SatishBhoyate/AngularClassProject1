import { Products } from './../model/products.model';
// const PI
export const PRODUCTS: Products[] = [
  {
    prdName: 'Mobile',
    prdId: 1001,
    inStock: 0,
    country: 'India',
    prdColor: 'red',
    isOutOfStock: false,
    prdImg: '../../../assets/img/1.jpeg',
    qntt: 0,
  },
  {
    prdName: 'Laptop',
    prdId: 1002,
    inStock: 10,
    country: 'Australia',
    prdColor: 'green',
    isOutOfStock: true,
    prdImg: '../../../assets/img/2.jpeg',
    qntt: 0,
  },
  {
    prdName: 'Book',
    prdId: 1003,
    inStock: 10,
    country: '',
    prdColor: 'blue',
    isOutOfStock: true,
    prdImg: '../../../assets/img/3.jpeg',
    qntt: 0,
  },
];
