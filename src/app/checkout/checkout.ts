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
  paymentMethod: string = 'blik';
  errorMessage: string = '';

  constructor(private router: Router) {}

  pay(): void {
    this.errorMessage = '';
    const isError = Math.random() < 0.3;
    if (isError) {
      this.errorMessage = 'Wystąpił błąd. Spróbuj ponownie';
    } else {
      this.router.navigate(['/summary']);
    }
  }
}
