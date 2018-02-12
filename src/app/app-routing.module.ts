import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AccessoryPageComponent} from './accessory-page/accessory-page.component';
import {SeatPageComponent} from './seat-page/seat-page.component';
import {DeskComponent} from './desk/desk.component';
import {PrestationComponent} from './prestation/prestation.component';
import {ContactComponent} from './contact/contact.component';
import {CarouselCardComponent} from './carousel-card/carousel-card.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'siege',
    children: [
      {
        path: '',
        component: SeatPageComponent
      },
      {
        path: 'product',
        component: ProductDetailsComponent
      },
      {
        path: ':categoryName',
        component: CarouselCardComponent
      }
    ]},
  {path: 'carousel', component: CarouselCardComponent},
  {path: 'accessoire',
    children: [
      {
        path: '',
        component: AccessoryPageComponent
      },
      {
        path: 'product',
        component: ProductDetailsComponent
      },
      {
        path: ':categoryName',
        component: CarouselCardComponent
      }
    ]},
  {path: 'table', component: CarouselCardComponent},
  {path: 'bureaux', component: DeskComponent},
  {path: 'prestation', component: PrestationComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
