import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = '../../assets/images/p1.JPEG';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 21.9, 2.5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['电子', '小科技']),
      new Product(2, '第二个商品', 8.9, 1.5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['图书']),
      new Product(3, '第三个商品', 4.9, 5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['电子', '图书']),
      new Product(4, '第四个商品', 99.9, 3.5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['电子', '图书']),
      new Product(5, '第五个商品', 55.9, 5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['小科技']),
      new Product(6, '第六个商品', 23.9, 3.5, '这是商品的介绍，此商品仍全宇宙中最好的商品之一。', ['电子', '小科技']),
    ]
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