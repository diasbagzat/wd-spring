import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopAppComponent } from './top-app/top-app.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopAppComponent,
    SliderComponent,
    CategoriesComponent,
    FooterComponent,
    CategoryProductsComponent,
    SignInComponent,
    SignUpComponent,
    CategoryListComponent,
    ProductDetailComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
