import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageService} from './image/image.service';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ImageService
    ],
  declarations: []
})
export class CoreModule { }
