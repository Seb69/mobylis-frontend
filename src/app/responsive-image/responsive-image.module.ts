import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ResponsiveImageComponent} from './responsive-image.component';
import {ImageService} from '../image/image.service';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [CommonModule, ResponsiveImageComponent],
  providers: [ImageService],
  declarations: [ResponsiveImageComponent]
})
export class ResponsiveImageModule {}
