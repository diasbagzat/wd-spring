import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Product, products} from '../product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  items;

  constructor(private cartService: CartService) { 
    this.items = this.cartService.getProducts();
  }

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
  ngOnInit(): void {
    this.getProducts();
  }

}
