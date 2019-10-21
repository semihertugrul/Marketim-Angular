import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { MybasketComponent } from './mybasket/mybasket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as _states from '../store/states';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [MybasketComponent],
  imports: [
    FontAwesomeModule,
    CommonModule,
    BasketRoutingModule,
    NgxsModule.forFeature([_states.MenuState, _states.MyBasketState, _states.ProductState]),
  ],
})
export class BasketModule {}
