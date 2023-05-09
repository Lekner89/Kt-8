import { Component } from '@angular/core';
import { HomeComponent, Item } from './home.component';
import { BasketService } from '../../src/app/service/basket.service';

@Component({
    selector: 'basket-app',
    styles: [`
        h3 {
            color: #1c1c1c;
        }
        li {
            color: #1c1c1c;
        }
    `],
    template: `
    <body>
        <h3>Корзина</h3>
        <ul>
            <li *ngFor="let item of basketItems">
                {{ item.purchase }} - {{ item.price }}
            </li>
        </ul>
    </body>
    `,
    providers: [HomeComponent]
})

export class BasketComponent { 
    basketItems: Item[] = [];

    constructor(private basketService: BasketService) {
        this.basketItems = basketService.basketItems;
      }
}