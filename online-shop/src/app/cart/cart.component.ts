import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Product, PRODUCTS} from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.cartService.getProducts().subscribe(products => this.products = products);
  }

}
