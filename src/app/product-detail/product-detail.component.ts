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
  private newRating = 5;
  private content: string;
  private isComment: boolean = false;
  constructor(private routeInfo: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    this.product = this.productService.getProductForId(this.routeInfo.snapshot.params['productId']);
    this.comments = this.productService.getCommentForProId(this.routeInfo.snapshot.params['productId']);
  }

  addComment() {
    this.comments.unshift(
      new Comment(this.comments.length, this.product.id, new Date().toISOString(), 'yan', this.newRating, this.content)
    );

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.content = null;
    this.newRating = 5;
    this.isComment = true;
  }

}
