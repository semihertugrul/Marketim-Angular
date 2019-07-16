import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCartPlus, faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { fa500px } from '@fortawesome/free-brands-svg-icons';

library.add(faCartPlus, faLiraSign);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-page/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './main-page/header/header.component';
import { SliderComponent } from './main-page/slider/slider.component';
import { MenuState, ProductState, MyBasketState } from './store/states';

@NgModule({
  declarations: [AppComponent, HomeComponent, CardComponent, HeaderComponent, SliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([MenuState, ProductState, MyBasketState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
