import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [CommonModule, MainPageRoutingModule, SharedModule],
  exports: [HomeComponent, SliderComponent],
})
export class MainPageModule {}
