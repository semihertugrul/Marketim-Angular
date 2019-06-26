export namespace Menu {
  export interface State {
    menu: MenuResponse;
  }

  export interface MenuResponse {
    _id: string;
    Id: number;
    Name: string;
  }
}
