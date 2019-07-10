import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../store/models';
import { ProductState } from '../store/states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(ProductState.getPopularProduct)
  allProduct$: Observable<Product.ProductResponse[]>;

  constructor() {}

  ngOnInit() {}
}
