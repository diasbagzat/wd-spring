import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';
import { from } from 'rxjs';
import { NgImageSliderComponent } from 'ng-image-slider';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  imageObject: Array<object> = [{
    image: 'assets/jeans.jpg',
    thumbImage: 'assets/lacoste.jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
     image: 'assets/jeans.jpg',
     thumbImage: 'assets/lacoste.jpg',
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/jeans.jpg',
  thumbImage: 'assets/lacoste.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: 'assets/jeans.jpg',
  thumbImage: 'assets/lacoste.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: 'assets/jeans.jpg',
  thumbImage: 'assets/Armani.png',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: 'assets/jeans.jpg',
  thumbImage: 'assets/lacoste.jpg',
  alt: 'alt of image',
  title: 'title of image',

},
];
  constructor(private categoryService: CategoriesService) { }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories=>this.categories=categories);
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
