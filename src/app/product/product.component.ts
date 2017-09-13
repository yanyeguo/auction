import { Product, ProductServiceService } from './../shared/product-service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private keyWord: string;
  private titleFilter: FormControl = new FormControl();
  private products: Product[];
  private imgUrl = '../../assets/images/p1.JPEG';
  constructor(private productService: ProductServiceService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      (value: string) => {
        this.keyWord = value;
        console.log(this.keyWord);
      });

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

