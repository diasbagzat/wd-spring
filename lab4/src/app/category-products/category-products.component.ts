import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {categories} from '../categories';


@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  category;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = categories[+params.get('categoriesID')];
    });
  }

}
