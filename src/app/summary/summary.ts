import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { App } from '../app';

@Component({
  imports: [RouterLink],
  selector: 'app-summary',
  styleUrl: '../app.scss',
  templateUrl: 'summary.html',
})
export class Summary {
  constructor(public app: App) {}

  getTotal(): number {
    return this.app.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
