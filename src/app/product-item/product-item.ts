import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  styleUrl: '../app.scss',
  imports: [],
  template: `
    <div id="product">
      <h3>{{ product?.name }}</h3>
      <p>Cena: {{ product?.price }} zł</p>
      <button id="addBtn" (click)="onAddToCart()">Dodaj do koszyka</button>
    </div>
  `,
})
export class ProductItem {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
