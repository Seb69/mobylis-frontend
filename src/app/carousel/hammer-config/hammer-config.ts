import {HammerGestureConfig} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

declare var Hammer: any;

@Injectable()
export class MyHammerConfig extends HammerGestureConfig  {

  /**
   * We need to add touch-action pan-y in order to allow
   * Scrolling down and up on carousel element
   * @param {HTMLElement} element
   * @returns {any}
   */
  buildHammer(element: HTMLElement) {
    const hammerElement = new Hammer(element, {
      // allow scrolling on carousel element
      touchAction: 'pan-y',
    });
    return hammerElement;
  }

  /**
   * Set up pan threshold and direction
   * @type {any}
   */
  // events = event.preventDefault();
  overrides = <any>{
    'pan': {threshold: 0, direction: 6} // override default settings
  };



}
