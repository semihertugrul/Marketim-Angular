import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MyBasket, Product } from 'src/app/store/models';
import { Store } from '@ngxs/store';
import { AddBasket } from 'src/app/store/actions';

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
