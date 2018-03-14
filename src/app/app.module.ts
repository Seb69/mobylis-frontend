import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CoreModule} from './core/core.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {HomePageComponent} from './public/home-page/home-page.component';
import {SeatPageComponent} from './public/seat-page/seat-page.component';
import {AccessoryPageComponent} from './public/accessory-page/accessory-page.component';
import {CategoryComponent} from './category/category.component';
import {ImageModule} from './image/image.module';
import {CarouselCardModule} from './carousel-card/carousel-card.module';
import {ProductDetailsComponent} from './public/product-details/product-details.component';
import {CarouselModule} from './carousel/carousel.module';
import {HttpClientModule} from '@angular/common/http';
import {TableComponent} from './public/table-page/table.component';
import {PrestationComponent} from './public/prestation-page/prestation.component';
import {ContactComponent} from './public/contact-page/contact.component';
import {DeskComponent} from './public/desk-page/desk.component';
import {LoginPageComponent} from './user/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './core/http-interceptor';
import {CarouselProductModule} from './public/product-details/carousel/carousel-product.module';
import {FooterComponent} from './public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    SeatPageComponent,
    AccessoryPageComponent,
    TableComponent,
    DeskComponent,
    ProductDetailsComponent,
    CategoryComponent,
    LoginPageComponent,
    PrestationComponent,
    FooterComponent,
    ContactComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    CoreModule,
    CarouselCardModule,
    HttpClientModule,
    CarouselModule,
    CarouselProductModule,
    ReactiveFormsModule,
    ImageModule,
    RouterModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
