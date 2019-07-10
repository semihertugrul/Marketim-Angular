import { Menu } from './menu';

export namespace Product {
  export interface State {
    products: ProductResponse[];
  }

  export interface ProductResponse {
    Id: number;
    SubCategoryId: Menu.SubCategory[];
    Name: string;
    CategoryId: Menu.Category[];
    fee: number;
  }
}
