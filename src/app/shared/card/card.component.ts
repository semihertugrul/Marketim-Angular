import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input()
  cardTitle: string = 'Card Title';

  @Input()
  cardBody: string = 'Card Body';

  ngOnInit() {}
}
