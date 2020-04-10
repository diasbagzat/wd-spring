import { Component, OnInit } from '@angular/core';
import {Product, products} from '../product';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products = products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('The product has been added to the cart!');
    this.cartService.addToCart(product);
  }


  ngOnInit(): void {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params=>{
      this.product=products[+params.get('productId')];
      }
    );
  }

}
