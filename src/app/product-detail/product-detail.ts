import { Component, OnInit, AfterViewInit, OnDestroy, viewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { App } from '../app';
import InnerImageZoom from 'inner-image-zoom';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  styleUrl: '../app.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit, AfterViewInit, OnDestroy {
  product: any;

  private readonly zoomFrame = viewChild<ElementRef<HTMLElement>>('zoomFrame');
  private zoom?: { uninit(): void };

  constructor(
    private route: ActivatedRoute,
    public app: App,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.app.products.find((p) => p.id === id);
  }

  ngAfterViewInit(): void {
    if (this.zoomFrame()) {
      this.zoom = new InnerImageZoom('.image-frame.iiz') as unknown as {
        uninit(): void;
      };
    }
  }

  ngOnDestroy(): void {
    this.zoom?.uninit();
  }
}
