import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetMenuCategory, GetMenuSubCategory } from '../actions';
import { MENU_Defaults as defaults } from '../defaults';
import { Menu } from '../models';
import { MenuService } from '../services';

@State<Menu.State>({
  name: 'Menu',
  defaults,
})
export class MenuState {
  @Selector()
  static getMenuCategory({ category }: Menu.State): Menu.Category[] {
    return category;
  }

  @Selector()
  static getMenuSubCategory({ subCategory }: Menu.State): Menu.SubCategory[] {
    return subCategory;
  }

  constructor(private menuService: MenuService) {}

  @Action(GetMenuCategory)
  getMenuCategory({ patchState }: StateContext<Menu.State>) {
    return this.menuService.getCategory().pipe(
      tap((res: Menu.Category[]) => {
        patchState({ category: res });
      }),
    );
  }

  @Action(GetMenuSubCategory)
  getMenuSubCategory({ patchState }: StateContext<Menu.State>) {
    return this.menuService.getSubCategory().pipe(
      tap((res: Menu.SubCategory[]) => {
        patchState({ subCategory: res });
      }),
    );
  }
}
