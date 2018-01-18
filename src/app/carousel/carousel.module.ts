import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {CarouselComponent} from './carousel.component';
import {ImageModule} from '../image/image.module';


@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ImageModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent, SwiperModule]
})
export class CarouselModule { }
