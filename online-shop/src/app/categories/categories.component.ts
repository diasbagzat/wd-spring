import { Component, OnInit } from '@angular/core';
import {Category} from '../models';
import {CategoriesService} from '../categories.service';
//import {products, Product} from '../product';
import {Product} from '../models';
import {ProductService} from '../product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  products: Product[];

  images = ['../../assets/banner4.jpg','../../assets/banner5.jpg', '../../assets/interior_casual_he_0220.webp']

  
  constructor(public categoryService: CategoriesService, public productService: ProductService,private route: ActivatedRoute,) { }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  getCategoryProducts(id: number) : void {
    
    this.productService.getCategoryProducts(id).subscribe(products => this.products = products);
  }
  
  ngOnInit(): void {
    this.getCategories();
  }

}
