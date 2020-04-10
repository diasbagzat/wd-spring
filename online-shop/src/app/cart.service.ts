import { Injectable } from '@angular/core';
import {Product, PRODUCTS} from './product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]

  constructor() { }

  addToCart(product) {
    this.products.push(product);
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
