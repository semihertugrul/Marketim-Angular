import { Product } from './product';

export namespace MyBasket {
  export interface State {
    basket: Basket[];
    productNumber: number;
    totalFee: number;
  }

  export interface Basket {
    product: Product.ProductResponse;
    quantity: number;
  }
}
