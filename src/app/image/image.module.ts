import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {ImageService} from './image.service';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [CommonModule, ImageComponent],
  providers: [ImageService],
  declarations: [ImageComponent]
})
export class ImageModule { }
