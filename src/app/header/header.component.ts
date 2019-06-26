import { Component, OnInit } from '@angular/core';
import { MenuService } from '../store/services';
import { Store } from '@ngxs/store';
import { GetMenu } from '../store/actions/menu.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: MenuService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetMenu);
  }
}
