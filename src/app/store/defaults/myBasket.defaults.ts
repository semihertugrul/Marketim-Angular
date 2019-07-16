import { MyBasket } from '../models';

export const MYBASKET_Defaults: MyBasket.State = {
  basket: [] as MyBasket.Basket[],
  productNumber: 0 as number,
  totalFee: 0.0 as number,
};
