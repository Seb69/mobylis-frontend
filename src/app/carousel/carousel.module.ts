import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {CarouselComponent} from './carousel.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboard: true,
  centeredSlides: true
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent, SwiperModule]
})
export class CarouselModule { }
