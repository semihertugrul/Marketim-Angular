import { Menu } from './menu';

export namespace Product {
  export interface State {
    products: ProductResponse[];
  }

  export interface ProductResponse extends Menu.SubCategory {
    Name: string;
    Fee: number;
  }
}
