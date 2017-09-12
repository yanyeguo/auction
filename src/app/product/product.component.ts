import { Product, ProductServiceService } from './../shared/product-service/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgUrl = '../../assets/images/p1.JPEG';
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

