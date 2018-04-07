import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { ListComponent } from './pages/list/list.component';
import { BasketComponent } from './pages/basket/basket.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      {path: '', component: ListComponent},
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
