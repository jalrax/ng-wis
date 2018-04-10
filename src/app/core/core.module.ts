import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import {WaresListComponent} from './pages/wares-list/wares-list.component';
import { BasketComponent } from './pages/basket/basket.component';
import {WishListComponent} from './pages/wish-list/wish-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  declarations: [
    CoreComponent,
    WaresListComponent,
    BasketComponent,
    WishListComponent
  ]
})
export class CoreModule {
}
