import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  styleUrl: '../app.scss',
  imports: [],
  templateUrl: 'product-item.html',
})
export class ProductItem {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
