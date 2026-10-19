import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-checkout',
  styleUrl: '../app.scss',
  templateUrl: 'checkout.html',
})
export class Checkout {
  errorMessage: string = '';

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    paymentMethod: new FormControl('blik', Validators.required),
    blikCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    cardNumber: new FormControl(''),
  });

  constructor(private router: Router) {
    this.checkoutForm.get('paymentMethod')?.valueChanges.subscribe((method) => {
      if (method === 'blik') {
        this.checkoutForm
          .get('blikCode')
          ?.setValidators([Validators.required, Validators.pattern('^[0-9]{6}$')]);
        this.checkoutForm.get('cardNumber')?.clearValidators();
      } else {
        this.checkoutForm
          .get('cardNumber')
          ?.setValidators([Validators.required, Validators.pattern('^[0-9]{16}$')]);
        this.checkoutForm.get('blikCode')?.clearValidators();
      }
      this.checkoutForm.get('blikCode')?.updateValueAndValidity();
      this.checkoutForm.get('cardNumber')?.updateValueAndValidity();
    });
  }

  get paymentMethod() {
    return this.checkoutForm.get('paymentMethod')?.value;
  }

  pay(): void {
    if (this.checkoutForm.invalid) {
      this.errorMessage = 'Uzupełnij poprawnie wszystkie pola.';
      return;
    }

    this.errorMessage = '';
    const isError = Math.random() < 0.2;

    if (isError) {
      this.errorMessage = 'Wystąpił błąd płatności. Spróbuj ponownie.';
    } else {
      this.router.navigate(['/summary']);
    }
  }
}
