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
      price: 199.99,
      image: '/images/klawiatura.png',
      description:
        'Klawiatura to urządzenie z przyciskami służące do pisania i sterowania komputerem.',
      rating: '★★★☆☆ (97)',
    },
    {
      id: 2,
      name: 'Mysz',
      price: 99.99,
      image: '/images/mysz.png',
      description:
        'Mysz komputerowa to urządzenie wskazujące, które pozwala poruszać kursorem po ekranie poprzez przesuwanie go po płaskiej powierzchni.',
      rating: '★★☆☆☆ (89)',
    },
    {
      id: 3,
      name: 'Monitor',
      price: 899.99,
      image: '/images/monitor.png',
      description:
        'Monitor to ekran wyświetlający obraz, teksty i programy uruchomione na komputerze.',
      rating: '★★★★★ (116)',
    },
    {
      id: 4,
      name: 'Słuchawki',
      price: 149.99,
      image: '/images/sluchawki.png',
      description:
        'Słuchawki to urządzenie audio, które pozwala słuchać dźwięków bezpośrednio z komputera lub telefonu.',
      rating: '★★★★☆ (103)',
    },
    {
      id: 5,
      name: 'Kabel HDMI',
      price: 29.99,
      image: '/images/hdmi.png',
      description:
        'Kabel HDMI służy do cyfrowego przesyłania obrazu i dźwięku wysokiej jakości między urządzeniami.',
      rating: '★★★★★ (142)',
    },
    {
      id: 6,
      name: 'Podkładka pod mysz',
      price: 54.99,
      image: '/images/podkladka.png',
      description: 'Duża podkładka pod mysz i klawiaturę z gładką powierzchnią.',
      rating: '★★★★☆ (91)',
    },
  ];

  cartItems: any[] = [];

  handleAddToCart(product: any): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity += 1;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    } else {
      this.handleRemoveFromCart(index);
    }
  }

  handleRemoveFromCart(index: number): void {
    this.cartItems = this.cartItems.filter((_, i) => i !== index);
  }

  getTotalItemsCount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
}
