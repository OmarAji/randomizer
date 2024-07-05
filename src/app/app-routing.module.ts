import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CoinFlipperComponent} from "./pages/coin-flipper/coin-flipper.component";
import {DiceRollerComponent} from "./pages/dice-roller/dice-roller.component";
import {LotteryQuickPickComponent} from "./pages/lottery-quick-pick/lottery-quick-pick.component";
import {ProjektvisionComponent} from "./pages/projektvision/projektvision.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'coinflipper',
    component: CoinFlipperComponent
  },
  {
    path: 'dice-roller',
    component: DiceRollerComponent
  },
  {
    path: 'lottery-quick-pick',
    component: LotteryQuickPickComponent
  },
  {
    path: 'projektvision',
    component: ProjektvisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
