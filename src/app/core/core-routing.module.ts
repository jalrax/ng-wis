import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import {WaresListComponent} from './pages/wares-list/wares-list.component';
import { BasketComponent } from './pages/basket/basket.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      {path: '', component: WaresListComponent},
      {path: 'basket', component: BasketComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
