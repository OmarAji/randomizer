import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./pages/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {LotaryComponent} from "./pages/lotary/lotary.component";
import {KenoQuickComponent} from "./pages/keno-quick/keno-quick.component";
import {CoinFliperComponent} from "./pages/coin-fliper/coin-fliper.component";
import {DiceRollerComponent} from "./pages/dice-roller/dice-roller.component";
import {CardShuffleComponent} from "./pages/card-shuffle/card-shuffle.component";
import {FundRandomizerComponent} from "./pages/fund-randomizer/fund-randomizer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LotaryComponent,
    KenoQuickComponent,
    CoinFliperComponent,
    DiceRollerComponent,
    CardShuffleComponent,
    FundRandomizerComponent
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
