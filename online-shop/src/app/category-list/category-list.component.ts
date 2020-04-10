import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';
import {products, Product} from '../product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  products = products;
  categories: Category[];

  constructor(private categoryService: CategoriesService) { }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
