import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`

        nav {
            background-color: #1c1c1c;
            color: #f0f0f0;
        }
        
        .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
        
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 50px;
            background-color: #4169E1;
            color: white;
            border-radius: 5px;
            margin-right: 10px;
        }
    `],
    template: `
            <body> 
                <div>
                    <nav>
                        <div class="button-container">
                            <a routerLink="">Главная</a>
                            <a routerLink="/about">О сайте</a>
                            <a routerLink="/basket">Корзина</a>
                        </div>
                    </nav>
                    <router-outlet></router-outlet>
                </div>
            </body>`
})
export class AppComponent { }