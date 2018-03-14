import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageService} from './image/image.service';
import {FileUploaderService} from '../user/admin/service/file-uploader.service';
import {AuthenticationService} from './security/authentication.service';
import {AuthGuard} from './can-activate/AuthGuard';

@NgModule({
  imports: [CommonModule],
  providers: [
    ImageService,
    FileUploaderService,
    AuthenticationService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule {
}
