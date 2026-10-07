import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () => import('./product-list/product-list').then((m) => m.ProductList),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'summary',
    loadComponent: () => import('./summary/summary').then((m) => m.Summary),
  },
  { path: '**', redirectTo: 'products' },
];
