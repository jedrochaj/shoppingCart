import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  styleUrl: '../app.scss',
  imports: [],
  templateUrl: 'product-item.html',
})
export class ProductItem {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  constructor(private router: Router) {}

  goToDetails(): void {
    this.router.navigate(['/product', this.product?.id]);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
