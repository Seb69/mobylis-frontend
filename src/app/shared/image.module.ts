import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import {ImageUrlGeneratorService} from './image/image-url-generator.service';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [CommonModule, ImageComponent],
  providers: [ImageUrlGeneratorService],
  declarations: [ImageComponent]
})
export class ImageModule { }
