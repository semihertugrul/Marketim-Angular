import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Menu } from '../models';
import { MENU_Defaults as defaults } from '../defaults';
import { MenuService } from '../services';
import { GetMenuCategory, GetMenuSubCategory } from '../actions';

@State<Menu.State>({
  name: 'Menu',
  defaults: defaults,
})
export class MenuState {
  @Selector()
  static getMenuCategory({ category }: Menu.State): Menu.MenuCategoryResponse[] {
    return category;
  }

  @Selector()
  static getMenuSubCategory({ subCategory }: Menu.State): Menu.MenuSubCategoryResponse[] {
    return subCategory;
  }

  constructor(private menuService: MenuService) {}

  @Action(GetMenuCategory)
  getMenuCategory({ patchState }: StateContext<Menu.State>) {
    return this.menuService.getCategory().pipe(
      tap((res: Menu.MenuCategoryResponse[]) => {
        patchState({ category: res });
      }),
    );
  }

  @Action(GetMenuSubCategory)
  getMenuSubCategory({ patchState }: StateContext<Menu.State>) {
    return this.menuService.getSubCategory().pipe(
      tap((res: Menu.MenuSubCategoryResponse[]) => {
        patchState({ subCategory: res });
      }),
    );
  }
}
