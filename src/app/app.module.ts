import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ImageModule} from './image/image.module';
import {CoreModule} from './core/core.module';
import {CarouselModule} from './carousel/carousel.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {CarouselCardComponent} from './carousel-card/carousel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    CoreModule,
    // StyleModule,
    ImageModule,
    CarouselModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
