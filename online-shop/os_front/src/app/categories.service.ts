import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from './category';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) {}

  // main() {
  //   return this.http.get(`${this.BASE_URL}/main/`);
  // }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categoryList/${id}`);
  }
}
