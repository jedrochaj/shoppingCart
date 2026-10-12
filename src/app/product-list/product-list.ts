import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { App } from '../app';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  styleUrl: '../app.scss',
  templateUrl: './product-list.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductList {
  constructor(public app: App) {}
}
