import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  styleUrl: '/app.scss',
  imports: [ProductList, Cart],
  template: `
    <h1 style="margin-left:10px;">Wszystkie produkty</h1>
    <app-product-list
      [products]="products"
      (addToCart)="handleAddToCart($event)"
    ></app-product-list>

    <app-cart [items]="cartItems" (removeItem)="handleRemoveFromCart($event)"> </app-cart>
  `,
})
export class App {
  products = [
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 },
  ];

  cartItems: any[] = [];

  handleAddToCart(product: any): void {
    this.cartItems = [...this.cartItems, product];
  }

  handleRemoveFromCart(index: number): void {
    this.cartItems = this.cartItems.filter((_, i) => i !== index);
  }
}
