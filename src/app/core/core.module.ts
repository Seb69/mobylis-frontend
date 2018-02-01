import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageService} from './image/image.service';

@NgModule({
  imports: [CommonModule],
  providers: [ImageService],
  declarations: []
})
export class CoreModule {}
