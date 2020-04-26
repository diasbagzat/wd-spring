import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import {products, Product} from '../product';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  products = products;

  images = ['../../assets/banner4.jpg', '../../assets/banner5.jpg', '../../assets/interior_casual_he_0220.webp']


  constructor(private categoryService: CategoriesService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
