import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetProduct } from '../actions';
import { PRODUCT_Defaults as defaults } from '../defaults';
import { Product } from '../models';
import { ProductService } from '../services';

@State<Product.State>({
  name: 'Product',
  defaults: defaults,
})
export class ProductState {
  @Selector()
  static getPopularProduct({ products }: Product.State): Product.ProductResponse[] {
    return products.slice(0, 4);
  }

  @Selector()
  static getAllProduct({ products }: Product.State): Product.ProductResponse[] {
    return products;
  }

  constructor(private productService: ProductService) {}

  @Action(GetProduct)
  getMenuCategory({ patchState }: StateContext<Product.State>) {
    return this.productService.getProducts().pipe(
      tap((res: Product.ProductResponse[]) => {
        patchState({ products: res });
      }),
    );
  }
}
