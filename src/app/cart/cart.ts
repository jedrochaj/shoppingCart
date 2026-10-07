import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { App } from '../app';

@Component({
  imports: [RouterLink],
  selector: 'app-cart',
  styleUrl: '../app.scss',
  templateUrl: './cart.html',
})
export class Cart {
  constructor(public app: App) {}

  getTotal(): number {
    return this.app.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
