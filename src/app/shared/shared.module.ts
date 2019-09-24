import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faLiraSign, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as _components from './components';

library.add(faCartPlus, faLiraSign, faTimes);

@NgModule({
  declarations: [_components.CardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [_components.CardComponent, FontAwesomeModule],
})
export class SharedModule {}
