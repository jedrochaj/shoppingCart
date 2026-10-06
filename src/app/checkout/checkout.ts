import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-checkout',
  styleUrl: '../app.scss',
  template: `
    <div id="cart" style="width: 300px;">
      <h2>Płatność</h2>
      <p>Dokoncz zamówienie</p>
      <button id="addBtn" (click)="pay()">Zapłać</button>
    </div>
  `,
})
export class Checkout {
  constructor(private router: Router) {}

  pay(): void {
    const isError = Math.random() < 0.2;
    if (isError) {
      alert('Wystapil blad');
    } else {
      this.router.navigate(['/summary']);
    }
  }
}
