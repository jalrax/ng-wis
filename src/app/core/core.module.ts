import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { ListComponent } from './pages/list/list.component';
import { BasketComponent } from './pages/basket/basket.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  declarations: [
    CoreComponent,
    ListComponent,
    BasketComponent
  ]
})
export class CoreModule {
}
