import {BrowserModule} from '@angular/platform-browser';
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
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SeatPageComponent} from './seat-page/seat-page.component';
import {AccessoryPageComponent} from './accessory-page/accessory-page.component';
import {TableComponent} from './table/table.component';
import {DeskComponent} from './desk/desk.component';
import {PrestationComponent} from './prestation/prestation.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselCardComponent,
    HomePageComponent,
    SeatPageComponent,
    AccessoryPageComponent,
    TableComponent,
    DeskComponent,
    PrestationComponent,
    ContactComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    CoreModule,
    ImageModule,
    CarouselModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
