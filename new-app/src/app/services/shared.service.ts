import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  calcProds(products) {
    let sum = 0;
    for (let prod of products) {
      sum = sum + prod.inStock;
    }
    return sum;
  }
}
