import { Component, OnInit } from '@angular/core';
import {PRODUCTS, Product} from '../product';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  products;

  images = ['../../assets/banner4.jpg', '../../assets/banner5.jpg', '../../assets/interior_casual_he_0220.webp'];
  constructor() { }

  ngOnInit(): void {
  }

}
