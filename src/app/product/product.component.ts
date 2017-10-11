import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public imgUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 20.5, 3.5, '这是第一个商品的描述', ['qwe', 'wqe']),
      new Product(2, '第二个商品', 100.5, 2.5, '这是第二个商品的描述', ['qwe', 'wqe']),
      new Product(3, '第三个商品', 200.5, 1, '这是第三个商品的描述', ['qwe', 'wqe']),
      new Product(4, '第四个商品', 400.5, 5.5, '这是第四个商品的描述', ['qwe', 'wqe']),
      new Product(5, '第五个商品', 50.5, 4.5, '这是第五个商品的描述', ['qwe', 'wqe']),
      new Product(6, '第六个商品', 200.5, 1.5, '这是第六个商品的描述', ['qwe', 'wqe']),
    ];
    this.imgUrl = 'http://placehold.it/320x150';
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
