import { Component, OnInit } from '@angular/core';
 import { products} from '../product';
// import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import {ProductService} from '../product.service';
import {Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public id;
  products = products;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
  ) { }

  

  addToCart(product) {
    window.alert('The product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  getProduct(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.productService.getProduct(this.id)
      .subscribe(product => this.product = product);
  }

  ngOnInit(): void {
    this.getProduct();
    // console.log(this.route.paramMap);
    // this.route.paramMap.subscribe(params=>{
    //   this.product=products[+params.get('product_id')];
      }

}
