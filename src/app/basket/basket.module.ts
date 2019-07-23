import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { MybasketComponent } from './mybasket/mybasket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MybasketComponent],
  imports: [FontAwesomeModule, CommonModule, BasketRoutingModule],
})
export class BasketModule {}
