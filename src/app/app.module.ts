import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StyleModule} from './style.module';
import {MenuComponent} from './menu/menu.component';
import {ImageModule} from './image/image.module';
import {CoreModule} from './core/core.module';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselImageComponent} from './carousel/carousel-image/carousel-image.component';
import {ImageService} from './core/image/image.service';
import {CarouselModule} from './carousel/carousel.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    StyleModule,
    ImageModule,
    CarouselModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
