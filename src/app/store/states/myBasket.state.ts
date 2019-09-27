import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddBasket } from '../actions';
import { MYBASKET_Defaults as defaults } from '../defaults';
import { MyBasket } from '../models';

@State<MyBasket.State>({
  name: 'MyBasket',
  defaults: defaults,
})
export class MyBasketState {
  @Selector()
  static getMyBasket(mybasket: MyBasket.State) {
    return mybasket;
  }

  @Action(AddBasket)
  addBasket({ patchState, getState }: StateContext<MyBasket.State>, { payload }: AddBasket) {
    const state = getState();
    patchState({
      basket: [...state.basket, payload],
      productNumber: state.productNumber + 1,
      totalFee: state.totalFee + Number((payload.product.Fee * payload.quantity).toFixed(2)),
    });
  }
}
