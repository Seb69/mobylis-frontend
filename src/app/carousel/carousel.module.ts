import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {CarouselImageComponent} from './carousel-image/carousel-image.component';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {CarouselService} from './service/carousel.service';
import {MyHammerConfig} from './hammer-config/hammer-config';
import {LoadImageObservable} from './service/loadImageObservable';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    CarouselImageComponent],
  exports: [
    CarouselComponent,
    CarouselImageComponent
  ],
  providers: [
    CarouselService,
    LoadImageObservable,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
})
export class CarouselModule {
}
