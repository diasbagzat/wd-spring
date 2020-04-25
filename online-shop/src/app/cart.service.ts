import { Injectable } from '@angular/core';
import {Product, products} from './product';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  items = [];
  // products = products;
  // product: Product[]

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getProducts() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
