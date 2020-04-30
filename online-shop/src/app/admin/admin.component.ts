import { Component, OnInit } from '@angular/core';
import {Product} from '../models'

import {ProductService} from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
products: Product[] = [];
product : Product;
selectedProd: Product;

public name: string;
public price: DoubleRange;
public oldPrice: number;
public description: string;
public econom: number;
public sale: string;
public shortDesc:string;
public size: string;
public category_id: number;
public image:string;
  constructor(private productService: ProductService) { }

  getProducts() : void {
    this.productService.getProducts().subscribe(products => this.products = products)
  }

onSelect(product: Product) : void {
  this.selectedProd = product;
}

deleteProduct(id:number) {
  this.productService.deleteProduct(id).subscribe(data => {
    window.location.reload();
  })
}

addProduct(name: string, price: DoubleRange, category_id: number, oldPrice:number, image:string, sale: string, econom: number, description: string, shortDesc:string, size:number): void {
  this.productService.addProduct(  { name, price, category_id, oldPrice, image, shortDesc, sale, econom, description, size } as unknown  as Product)
  .subscribe(product => {
    this.products.push(this.product)
  });
}

// editProduct(name: string, price: number, oldPrice: number, description: string, econom: number, sale: string, id: number) : void {
//       this.productService.editProduct(new Product(), id).subscribe(product => {
//         this.products.push(product)
//       })
// }
  
  ngOnInit(): void {
    this.getProducts();
  }

}
