import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: '../app.scss',
  template: `
    <h2>Koszyk</h2>
    @if (items.length === 0) {
      <p>Koszyk jest pusty</p>
    } @else {
      @for (item of items; track $index) {
        <p>
          {{ item.name }} {{ item.price }} zł
          <button (click)="onRemove($index)" id="removeBtn">Usuń</button>
        </p>
      }
      <p>Razem: {{ getTotal() }} zł</p>
    }
  `,
})
export class Cart {
  @Input() items: any[] = [];

  @Output() removeItem = new EventEmitter<number>();

  onRemove(index: number): void {
    this.removeItem.emit(index);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
