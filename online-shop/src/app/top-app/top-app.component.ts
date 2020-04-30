import { Component, OnInit } from '@angular/core';
import {Category} from '../models';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-top-app',
  templateUrl: './top-app.component.html',
  styleUrls: ['./top-app.component.css']
})
export class TopAppComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoriesService) { }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories=>this.categories=categories);
  }
  logout() {
    localStorage.clear();
    alert('Logout');
  }
  ngOnInit(): void {
    this.getCategories();
  }
  
}
