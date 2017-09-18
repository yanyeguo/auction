

import { Injectable } from '@angular/core';

@Injectable()
export class ProductServiceService {

  private products: Product[] = [
    new Product(1, '第1个商品', 21.9, 2.5, '这是商品的介绍6，此商品仍全宇宙中最好的商品之一。', ['电子', '小科技']),
    new Product(2, '第2个商品', 8.8, 1.5, '这是商品的介绍6，此商品仍全宇宙中最好的商品之一。', ['图书']),
    new Product(3, '第23个商品', 4.9, 5, '这是商品的介绍45，此商品仍全宇宙中最好的商品之一。', ['电子', '图书']),
    new Product(4, '第24个商品', 99.9, 3.5, '这是商品的介绍5，此商品仍全宇宙中最好的商品之一。', ['电子', '图书']),
    new Product(5, '第5个商品', 55.2, 5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['小科技']),
    new Product(6, '第16个商品', 23.9, 3.5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['电子', '小科技']),
  ]
  private commnets: Comment[] = [
    new Comment(1, 1, '2017-9-12', 'yan', 4, '东西很好用'),
    new Comment(2, 3, '2017-7-12', 'yan', 3, '东西很好用'),
    new Comment(3, 2, '2017-5-22', 'yan', 4, '店家很好'),
    new Comment(4, 1, '2017-2-12', 'yan', 3, '很快，很好'),
    new Comment(5, 3, '2017-3-22', 'yan', 5, '东西不错'),
    new Comment(6, 1, '2017-1-12', 'yan', 2, '东西很好用'),
  ]


  constructor() { }

  getCategries(): string[] {
    return ['电子', '小科技', '图书'];
  }

  getProducts(): Product[] {
    return this.products;
  }
  getProductForId(productId: number): Product {
    return this.products.find((product) => product.id == productId);
  }

  getCommentForProId(productId: number): Comment[] {
    return this.commnets.filter((comment: Comment) => comment.proId == productId);
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
export class Comment {
  constructor(
    public id: number,
    public proId: number,
    public datatime: string,
    public author: string,
    public rating: number,
    public desc: string
  ) { }
}