export namespace Menu {
  export interface State {
    category: MenuCategoryResponse[];
    subCategory: MenuSubCategoryResponse[];
  }

  export interface MenuCategoryResponse {
    _id: string;
    Id: number;
    Name: string;
  }

  export interface MenuSubCategoryResponse {
    _id: string;
    CategoryId: MenuCategoryResponse[];
    Name: string;
  }
}
