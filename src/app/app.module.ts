import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterOutlet} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {CoinFlipperComponent} from "./pages/coin-flipper/coin-flipper.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CardsComponent} from "./components/cards/cards.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinFlipperComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
