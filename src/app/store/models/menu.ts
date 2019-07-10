export namespace Menu {
  export interface State {
    category: Category[];
    subCategory: SubCategory[];
  }

  export interface Category {
    Id: number;
    Name: string;
  }

  export interface SubCategory {
    CategoryId: Category[];
    Name: string;
  }
}
