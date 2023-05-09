import { Injectable } from '@angular/core';
import { Item } from '../home.component';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  basketItems: Item[] = [];

  addToBasket(items: Item[]): void {
    this.basketItems = items;
  }
}