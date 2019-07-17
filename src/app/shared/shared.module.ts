import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

library.add(faCartPlus, faLiraSign);

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CardComponent, HeaderComponent],
})
export class SharedModule {}
