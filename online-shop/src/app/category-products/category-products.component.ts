import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../models';
import {products, Product} from '../product';

import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  categories: Category[];

 
  @Input() 
  category: Category;
  products = products;
  constructor(private route: ActivatedRoute,
              private _categoriesService: CategoriesService
              ) {}

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._categoriesService.getCategory(id)

      .subscribe(category => this.category =category);
  }
 
  getCategories(): void {
    this._categoriesService.getCategories().subscribe(categories => this.categories = categories);

  }

   ngOnInit(): void {
    console.log(this.route);
    this.getCategory();
    this.getCategories();
  }

}
