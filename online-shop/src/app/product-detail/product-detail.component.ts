import { Component, OnInit } from '@angular/core';
import {Product, PRODUCTS} from '../product';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('The product has been added to the cart!');
  }

  ngOnInit(): void {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get('productId')];
      }
    );
  }

}
