import { ProductServiceService, Product, Comment } from './../shared/product-service/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    this.product = this.productService.getProductForId(this.routeInfo.snapshot.params['productId']);
    this.comments = this.productService.getCommentForProId(this.routeInfo.snapshot.params['productId']);
  }

}
