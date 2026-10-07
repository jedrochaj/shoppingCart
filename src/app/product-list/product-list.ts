import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { App } from '../app';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  styleUrl: '../app.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  constructor(public app: App) {}
}
