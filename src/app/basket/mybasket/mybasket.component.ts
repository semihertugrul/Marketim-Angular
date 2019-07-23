import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { MyBasketState } from '../../store/states';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mybasket',
  templateUrl: './mybasket.component.html',
  styleUrls: ['./mybasket.component.scss'],
})
export class MybasketComponent implements OnInit {
  @Select(MyBasketState)
  myBasket$: Observable<MyBasketState>;

  constructor() {}

  ngOnInit() {}
}
