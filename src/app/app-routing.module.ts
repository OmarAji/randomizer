import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LotaryComponent} from "./pages/lotary/lotary.component";
import {KenoQuickComponent} from "./pages/keno-quick/keno-quick.component";
import {CoinFliperComponent} from "./pages/coin-fliper/coin-fliper.component";
import {DiceRollerComponent} from "./pages/dice-roller/dice-roller.component";
import {CardShuffleComponent} from "./pages/card-shuffle/card-shuffle.component";
import {FundRandomizerComponent} from "./pages/fund-randomizer/fund-randomizer.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lottery',
    component: LotaryComponent,
  },
  {
    path: 'keno-quick',
    component: KenoQuickComponent,
  },
  {
    path: 'coin-fliper',
    component: CoinFliperComponent,
  },
  {
    path: 'dice-roller',
    component: DiceRollerComponent,
  },
  {
    path: 'card-shuffle',
    component: CardShuffleComponent,
  },
  {
    path: 'fund-randomizer',
    component: FundRandomizerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
