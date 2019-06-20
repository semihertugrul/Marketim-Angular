import { sandboxOf } from 'angular-playground';
import { CardComponent } from '../../app/shared/card/card.component';

export default sandboxOf(CardComponent).add('card', {
  template: `<app-card></app-card>`,
});
