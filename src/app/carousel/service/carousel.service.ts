import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {

  constructor() { }

  setDeltaXPosition(deltaX: number, activeSlide: number, slidePosition: number): number {
    return - window.innerWidth  * activeSlide ;
  }

}
