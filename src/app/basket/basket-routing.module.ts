import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybasketComponent } from './mybasket/mybasket.component';

const routes: Routes = [
  {
    path: '',
    component: MybasketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
