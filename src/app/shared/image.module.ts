import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import {ImageUrlGeneratorService} from './image/image-url-generator.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CommonModule, ImageComponent],
  providers: [ImageUrlGeneratorService],
  declarations: [ImageComponent]
})
export class ImageModule { }
