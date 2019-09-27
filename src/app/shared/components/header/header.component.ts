import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GetProduct } from '../../../store/actions';
import { GetMenuCategory, GetMenuSubCategory } from '../../../store/actions/menu.actions';
import { Menu } from '../../../store/models';
import { MenuState, MyBasketState } from '../../../store/states';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Select(MenuState.getMenuCategory)
  category$: Observable<Menu.Category[]>;

  @Select(MenuState.getMenuSubCategory)
  subCategory$: Observable<Menu.SubCategory[]>;

  @Select(MyBasketState)
  myBasket$: Observable<MyBasketState>;

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new GetMenuCategory());
    this.store.dispatch(new GetMenuSubCategory());
    this.store.dispatch(new GetProduct());
  }

  ngOnInit() {}

  menuSubCategory(categoryId: number): Observable<Menu.SubCategory[]> {
    return this.subCategory$.pipe(
      filter(x => !!x.length),
      map(result => result.filter(x => x.CategoryId === categoryId)),
    );
  }

  myBasket() {
    this.router.navigate(['/mybasket']);
  }
}
