import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCanadianMapleLeaf, faTwitter, fa500px } from '@fortawesome/free-brands-svg-icons';

library.add(faCalendar, faCoffee, faCanadianMapleLeaf, faTwitter, fa500px);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './header/header.component';
import { MenuService } from './store/services';
import { MenuState } from './store/states/menu.state';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CardComponent, HeaderComponent, SliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([MenuState]),
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
