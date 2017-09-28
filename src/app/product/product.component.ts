import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product>

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 20.5, 3.5, '', ['qwe', 'wqe']),
      new Product(1, '第一个商品', 20.5, 3.5, '', ['qwe', 'wqe']),
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
  ) { }
}
