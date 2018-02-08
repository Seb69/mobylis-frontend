import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AccessoryPageComponent} from './accessory-page/accessory-page.component';
import {SeatPageComponent} from './seat-page/seat-page.component';
import {TableComponent} from './table/table.component';
import {DeskComponent} from './desk/desk.component';
import {PrestationComponent} from './prestation/prestation.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'siege', component: SeatPageComponent},
  {path: 'accessoire', component: AccessoryPageComponent},
  {path: 'table', component: TableComponent},
  {path: 'bureaux', component: DeskComponent},
  {path: 'prestation', component: PrestationComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
