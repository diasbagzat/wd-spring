import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from  './sign-up/sign-up.component'
import {CategoryListComponent} from './category-list/category-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartPageComponent} from './cart-page/cart-page.component'
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  { path: 'main', component: CategoriesComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'categoryList/:id', component: CategoryProductsComponent },
  {path: 'categories', component:CategoryListComponent},
  {path: 'login', component: SignInComponent},
  {path: 'registration', component: SignUpComponent},
  { path: 'products/:id', component: ProductDetailComponent },
  {path: 'cart', component:CartPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
