import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from './models';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';

  product: Product[];
  constructor(private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategoryProducts(category_id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${category_id}/products`)
  }

  getProduct(product_id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${product_id}`)
  } 

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products`)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/api/products/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/api/products/`, product, this.httpOptions)
  }
  
}
