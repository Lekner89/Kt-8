import  { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms';
import  { HighlightDirective } from './directive/highlight.directive';

import { Routes, RouterModule } from '@angular/router';

import  { AppComponent } from './app.component';
import { AboutComponent } from './about.component'
import { HomeComponent } from './home.component'
import { NotFoundComponent } from './not-found.component'
import { BasketComponent } from './basket.component'


//определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'basket', component: BasketComponent},
    { path: '**', component: NotFoundComponent},

]


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent, BasketComponent, HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }