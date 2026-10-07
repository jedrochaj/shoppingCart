import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-checkout',
  styleUrl: '../app.scss',
  templateUrl: 'checkout.html',
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

  paymentMethod: string = 'blik';
}
