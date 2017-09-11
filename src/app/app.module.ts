import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';

import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

import { NarbarComponent } from './narbar/narbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';



const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productTitle', component: ProductDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StarsComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent,
    NarbarComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
