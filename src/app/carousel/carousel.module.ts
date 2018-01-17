import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {CarouselComponent} from './carousel.component';


@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent, SwiperModule]
})
export class CarouselModule { }
