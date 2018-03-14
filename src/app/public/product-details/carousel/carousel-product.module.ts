import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {MyProductHammerConfig} from './hammer-config/hammer-product-config';
import {LoadProductImageObservable} from './service/loadImageObservable';
import {CarouselProductComponent} from './carousel/carousel-product.component';
import {CarouselProductImageComponent} from './carousel-product-image/carousel-product-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselProductComponent,
    CarouselProductImageComponent],
  exports: [
    CarouselProductComponent
  ],
  providers: [
    LoadProductImageObservable,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyProductHammerConfig
    }
  ],
})
export class CarouselProductModule {
}
