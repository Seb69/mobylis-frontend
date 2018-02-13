import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageContainerComponent} from './image-container.component';
import {ImageComponent} from './image/image.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  declarations: [ImageContainerComponent, ImageComponent],
  exports: [ImageContainerComponent, ImageComponent]
})
export class ImageModule { }
