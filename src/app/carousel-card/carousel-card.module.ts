import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselCardComponent} from './carousel-card.component';
import {CarouselModule} from '../carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [
    CarouselCardComponent
  ],
  exports: [
    CarouselCardComponent
  ]
})
export class CarouselCardModule {
}
