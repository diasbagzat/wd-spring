import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-top-app',
  templateUrl: './top-app.component.html',
  styleUrls: ['./top-app.component.css']
})
export class TopAppComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoriesService) { }
  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
