import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  styleUrl: '../app.scss',
  template: `
    @for (product of products; track product.id) {
      <app-product-item [product]="product" (addToCart)="addToCart.emit($event)"></app-product-item>
    }
  `,
})
export class ProductList {
  @Input() products: any[] = [];
  @Output() addToCart = new EventEmitter<any>();
}
