import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { App } from '../app';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  styleUrl: '../app.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    public app: App,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.app.products.find((p) => p.id === id);
  }
}
