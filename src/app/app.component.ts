import {Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  formButtonXs = true;

  ontap() {
    console.log('tap start');
  }

}
