import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from  './sign-up/sign-up.component'


const routes: Routes = [
  { path: 'main', component: CategoriesComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'categoryList/:id', component: CategoryProductsComponent },
  {path: 'login', component: SignInComponent},
  {path: 'registration', component: SignUpComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
