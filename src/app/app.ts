import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
})
export class App {
  products = [
    {
      id: 1,
      name: 'Klawiatura',
      price: 199,
      image: '/images/klawiatura.png',
      description:
        'Klawiatura to urządzenie z przyciskami służące do pisania i sterowania komputerem.',
      rating: '★★★☆☆ (97)',
    },
    {
      id: 2,
      name: 'Mysz',
      price: 99,
      image: '/images/myszka.png',
      description:
        'Mysz komputerowa to urządzenie wskazujące, które pozwala poruszać kursorem po ekranie poprzez przesuwanie go po płaskiej powierzchni.',
      rating: '★★☆☆☆ (89)',
    },
    {
      id: 3,
      name: 'Monitor',
      price: 899,
      image: '/images/monitor.png',
      description:
        'Monitor to ekran wyświetlający obraz, teksty i programy uruchomione na komputerze.',
      rating: '★★★★★ (116)',
    },
    {
      id: 4,
      name: 'Słuchawki',
      price: 149,
      image: '/images/sluchawki.png',
      description:
        'Słuchawki to urządzenie audio, które pozwala słuchać dźwięków bezpośrednio z komputera lub telefonu.',
      rating: '★★★★☆ (103)',
    },
  ];

  cartItems: any[] = [];

  handleAddToCart(product: any): void {
    this.cartItems = [...this.cartItems, product];
  }

  handleRemoveFromCart(index: number): void {
    this.cartItems = this.cartItems.filter((_, i) => i !== index);
  }
}
