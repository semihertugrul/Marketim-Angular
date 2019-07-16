import { MyBasket } from '../models';

export class AddBasket {
  static readonly type = '[MyBasket] add';
  static readonly desc = 'add my basket';

  constructor(public readonly payload: MyBasket.Basket) {}
}
