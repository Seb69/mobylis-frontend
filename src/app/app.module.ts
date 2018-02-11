import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CoreModule} from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SeatPageComponent} from './seat-page/seat-page.component';
import {AccessoryPageComponent} from './accessory-page/accessory-page.component';
import {TableComponent} from './table/table.component';
import {DeskComponent} from './desk/desk.component';
import {PrestationComponent} from './prestation/prestation.component';
import {ContactComponent} from './contact/contact.component';
import {CategoryComponent} from './category/category.component';
import { ImageModule} from './image/image.module';
import {CarouselCardModule} from './carousel-card/carousel-card.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    SeatPageComponent,
    AccessoryPageComponent,
    TableComponent,
    DeskComponent,
    CategoryComponent,
    PrestationComponent,
    ContactComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    CoreModule,
    CarouselCardModule,
    ImageModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
