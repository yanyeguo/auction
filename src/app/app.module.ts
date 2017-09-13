import { ProductServiceService } from './shared/product-service/product-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';

import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

import { NarbarComponent } from './narbar/narbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './piep/filter.pipe';





const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
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
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
