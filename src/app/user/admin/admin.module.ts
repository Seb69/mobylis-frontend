import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {ImageModule} from '../../image/image.module';
import { AdminImageComponent } from './admin-image/admin-image.component';
import { NewProductComponent } from './new-product/new-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    AdminImageComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
