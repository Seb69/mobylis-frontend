import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StyleModule} from './style.module';
import {MenuComponent} from './menu/menu.component';
import {ImageModule} from './shared/image.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CarouselModule} from './carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LazyLoadImageModule,
    CarouselModule,
    StyleModule,
    ImageModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
