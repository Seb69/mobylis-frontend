import {HammerGestureConfig} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'pan': {threshold: 0, direction: 6, pointers: 1} // override default settings
  };
}
