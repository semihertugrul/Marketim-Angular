import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Menu } from '../models';
import { MENU_Defaults as defaults } from '../defaults';
import { GetMenu } from '../actions/menu.actions';
import { MenuService } from '../services';

@State<Menu.State>({
  name: 'Menu',
  defaults: defaults,
})
export class MenuState {
  constructor(private menuService: MenuService) {}

  @Action(GetMenu)
  getMenu({ patchState }: StateContext<any>) {
    return this.menuService.getMenu().pipe(
      tap((res: Menu.MenuResponse) => {
        debugger;
        console.log(res);
        patchState({ menu: res });
      }),
    );
  }
}
