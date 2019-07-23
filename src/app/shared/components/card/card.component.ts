import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddBasket } from '../../../store/actions';
import { MyBasket, Product } from '../../../store/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private store: Store, private el: ElementRef) {}

  @Input()
  product: Product.ProductResponse;

  @Input()
  productName: string = 'product name';

  @Input()
  fee: number = 0.0;

  ngOnInit() {}

  addBasket() {
    const basket: MyBasket.Basket = {
      product: this.product,
      quantity: Number(this.el.nativeElement.querySelector('#quantity').value),
    };
    this.store.dispatch(new AddBasket(basket));
  }
}
