import {Injectable} from '@angular/core';
import {Product, products} from './product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[];

  constructor() {
  }

  addToCart(product) {
    this.products.push(product);
  }

  getProducts(): Observable<any> {
    return of(products);
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
