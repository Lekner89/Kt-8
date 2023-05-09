import { Component, ViewChild, ElementRef } from '@angular/core';
import { BasketService } from '../../src/app/service/basket.service';

export class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'home-app',
    styles: [`
      body {
        background-color: #1c1c1c;
        color: #f0f0f0;
      } 

      button {
        background-color: #4169E1;
      }
      
      .page-header {
        margin: 20px 0;
      }
    
      .form-control {
        background-color: #2d2d2d;
        border-color: #444444;
        color: #f0f0f0;
      }
    
      .form-group label {
        color: #f0f0f0;
      }
    
      .form-check-label {
        color: #f0f0f0;
      }
    
      .alert-danger {
        background-color: #ff5c5c;
        color: #f0f0f0;
        border-color: #ff5c5c;
      }
    
      .btn-primary {
        background-color: #4169E1;
        border-color: #3273dc;
      }
    
      .btn-primary:hover {
        background-color: #285fbd;
        border-color: #285fbd;
      }
    
      .slide {
        max-width: 50pf;
        background-color: #2d2d2d;
        border: 1px solid #444444;
        margin-bottom: 20px;
      }
    
      .slide:hover {
        border-color: #3273dc;
      }
    
      .card-title {
        font-size: 1.2rem;
        font-weight: bold;
      }
    
      .card-text {
        font-size: 1.1rem;
      }
    
      .is-valid {
        border-color: green !important;
      } 
      `],
    template: `
    <html>
    <body>
      <div class="page-header">
        <h1> Список покупок </h1>
      </div>
  
      <form (ngSubmit)="addItem()" #itemForm="ngForm">

        <div class="form-group">
            <label for="purchase">Название игры:</label>
            <input type="text" class="form-control" id="purchase" name="purchase" [(ngModel)]="text" required
                #purchaseInput (ngModelChange)="isNameValid = purchaseInput.value.trim().length > 0" [ngClass]="{'is-valid': isNameValid}">
            <div [hidden]="isNameValid" class="alert alert-danger">
                Название товара обязательно для заполнения
            </div>
        </div>

        <div class="form-group">
            <label for="price">Стоимость:</label>
            <input type="number" class="form-control" id="price" name="price" [(ngModel)]="price" required min="1">
            <div [hidden]="itemForm.controls.price.valid" class="alert alert-danger">
                Стоимость обязательна для заполнения
            </div>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="!itemForm.form.valid">Добавить товар</button>

      </form>

      <br/>
  
      <div *ngFor="let item of items" [highlight]="item.done" class="slide">
        <img src="/assets/image/1.jpg" class="card-img-top" alt="..." />
        <h5 class="card-title">{{ item.purchase }}</h5>
        <p class="card-text">Цена: {{ item.price }}</p>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="{{ item.purchase }}"
            [(ngModel)]="item.done"
            (click)="toggleDone(item)"
          />
          <label class="form-check-label" for="{{ item.purchase }}">Добавить в корзину</label>
        </div>
      </div>
  
      <button (click)="addToBasket()">Добавить выбранные товары в корзину</button>
    </body>
    </html>
    `
  })
export class HomeComponent {
    @ViewChild('purchaseInput') purchaseInput: ElementRef;

    text: string = '';
    price: number = null;
    isNameValid: boolean = false;

    items: Item[] =
    [
        { purchase: "КС ГО", done: false, price: 500},
        { purchase: "APEX LEGENDS", done: false, price: 999999},
        { purchase: "DOTA 2", done: true, price: 5000},
        { purchase: "BAROTRAUMA", done: false, price: 1000}
    ];
    
    addItem() {
        this.items.push({ purchase: this.text, price: this.price, done: false });
        this.text = '';
        this.price = null;
        this.isNameValid = false;
    }

    toggleDone(item) {
        item.done = !item.done;
    }

    basketItems: Item[] = [];

    constructor(private basketService: BasketService) { }
    
    addToBasket() {
        this.basketItems = this.items.filter(item => item.done);
        const totalPrice = this.basketItems.reduce((acc, item) => acc + item.price, 0);
        console.log("Added to basket:", this.basketItems);
        console.log("Total price:", totalPrice);
    
        this.basketService.addToBasket(this.basketItems);
        window.alert('Товар добавлен в корзину!');
    }
}