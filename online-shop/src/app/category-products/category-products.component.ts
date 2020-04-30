import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../models';
//import {products, Product} from '../product';
import {Product} from '../models'

import { CategoriesService } from '../categories.service';
import {ProductService} from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  categories: Category[] = [];
  category: Category;
  products: Product[] =[];
 
//  @Input() 
  
  //products = products;
  constructor(private route: ActivatedRoute,
              private categoryService: CategoriesService,
              private productService: ProductService,
              ) {}

              // getCategory() {
              //   const id = +this.route.snapshot.paramMap.get('id');
            
              //   this.categoryService.getCategory(id).subscribe(category => this.category = category);
              // }
 
  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);

  }

  getCategoryProducts() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategoryProducts(id).subscribe(products => this.products = products);
  }

   ngOnInit(): void {
    this.getCategoryProducts();
    // this.getCategory();

  }

}
