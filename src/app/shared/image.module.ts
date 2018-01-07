import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import {UrlGeneratorService} from './image/url-generator.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CommonModule, ImageComponent],
  providers: [UrlGeneratorService],
  declarations: [ImageComponent]
})
export class ImageModule { }
