import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductalertsComponent } from './productalerts/productalerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { IgxCarouselModule } from 'igniteui-angular';
import { CategoryProductsComponent } from './category-products/category-products.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'categories/:categoriesId', component: CategoryProductsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductalertsComponent,
    ProductDetailsComponent,
    CategoryProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


