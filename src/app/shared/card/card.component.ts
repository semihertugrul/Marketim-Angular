import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input()
  productName: string = 'product name';

  @Input()
  fee: number = 0.0;

  ngOnInit() {}
}
