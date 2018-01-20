import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {StyleModule} from './style.module';
import {MenuComponent} from './menu/menu.component';
import {ImageModule} from './image/image.module';
import {DemoOne} from './avatar/avatar.component';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DemoOne
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StyleModule,
    ImageModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
