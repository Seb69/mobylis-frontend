import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [CommonModule, ImageComponent],
  providers: [],
  declarations: [ImageComponent]
})
export class ImageModule { }
