import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from './category';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {LoginResponse} from './users';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  // main() {
  //   return this.http.get(`${this.BASE_URL}/main/`);
  // }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/categoryList/${id}`);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username,
      password
    }
  );
  }
}





