import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent, WINDOW} from './carousel.component';
import {CarouselImageComponent} from './carousel-image/carousel-image.component';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
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
    CarouselComponent
  ],
  providers: [
    LoadImageObservable,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide  : WINDOW,
      useValue : window
    }
  ],
})
export class CarouselModule {
}
