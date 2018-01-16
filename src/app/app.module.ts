import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StyleModule} from './style.module';
import {MenuComponent} from './menu/menu.component';
import {ImageModule} from './image/image.module';
import {ResponsiveImageModule} from './responsive-image/responsive-image.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ResponsiveImageModule,
    // CarouselModule,
    StyleModule,
    ImageModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
