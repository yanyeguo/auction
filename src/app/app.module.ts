import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';

import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

import { NarbarComponent } from './narbar/narbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StarsComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent,
    NarbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
