import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './public/home-page/home-page.component';
import {AccessoryPageComponent} from './public/accessory-page/accessory-page.component';
import {SeatPageComponent} from './public/seat-page/seat-page.component';
import {CarouselCardComponent} from './carousel-card/carousel-card.component';
import {ProductDetailsComponent} from './public/product-details/product-details.component';
import {AdminComponent} from './user/admin/admin.component';
import {PrestationComponent} from './public/prestation-page/prestation.component';
import {TableComponent} from './public/table-page/table.component';
import {DeskComponent} from './public/desk-page/desk.component';
import {ContactComponent} from './public/contact-page/contact.component';
import {LoginPageComponent} from './user/login-page/login-page.component';
import {AuthGuard} from './core/can-activate/AuthGuard';

const routes: Routes = [
  {path: '', component: HomePageComponent,
    children: [
      {
        path: 'siege',
        children: [
          {
            path: '',
            component: SeatPageComponent
          },
          {
            path: ':categoryName',
            component: CarouselCardComponent
          }
        ]
      },
      {
        path: 'accessoire',
        children: [
          {
            path: '',
            component: AccessoryPageComponent
          },
          {
            path: ':categoryName',
            component: CarouselCardComponent
          }
        ]
      },
      {path: 'table',
        children: [
          {
            path: '',
            component: TableComponent
          },
          {
            path: ':categoryName',
            component: CarouselCardComponent
          }
        ]},
      {path: 'bureaux', component: DeskComponent},
      {path: 'prestation', component: PrestationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'product/:id', component: ProductDetailsComponent}
    ]},
  {path: 'carousel', component: CarouselCardComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
