import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopAppComponent } from './top-app/top-app.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryProductsComponent } from './category-products/category-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopAppComponent,
    SliderComponent,
    CategoriesComponent,
    FooterComponent,
    CategoryProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
