import { Component, OnInit } from '@angular/core';
import { MenuService } from '../store/services';
import { Store, Select } from '@ngxs/store';
import { GetMenuCategory, GetMenuSubCategory } from '../store/actions/menu.actions';
import { MenuState } from '../store/states/menu.state';
import { Observable } from 'rxjs';
import { Menu } from '../store/models';
import { map, tap, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Select(MenuState.getMenuCategory)
  category$: Observable<Menu.MenuCategoryResponse[]>;

  @Select(MenuState.getMenuSubCategory)
  subCategory$: Observable<Menu.MenuSubCategoryResponse[]>;

  constructor(private service: MenuService, private store: Store) {
    this.store.dispatch(GetMenuCategory);
    this.store.dispatch(GetMenuSubCategory);
  }

  ngOnInit() {}

  menuSubCategory(categoryId: number): Observable<Menu.MenuSubCategoryResponse[]> {
    return this.subCategory$.pipe(
      filter(x => !!x.length),
      map(result => result.filter(x => x.CategoryId[0].Id === categoryId)),
    );
  }
}
