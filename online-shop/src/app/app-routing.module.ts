import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {CategoryProductsComponent} from './category-products/category-products.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categoryList/:id', component: CategoryProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
