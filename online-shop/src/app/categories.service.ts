import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Category} from "./models";



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  // // getCategory(id:number):Observable<Category>{
  // //   return of(CATEGORY.find(category => category.id===id));
  // // }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
    // return of(CATEGORY);
  }
}
