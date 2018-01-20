import {Component, Inject, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {isBrowser} from '@angular/flex-layout';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  isBrowserVar: boolean;

  public slides = [
    'Signature_xt56sy.pdf',
    'Photo_kbyuqw.jpg',
    'sample.jpg'
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    observer: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: {
      loadPrevNext: false,
      loadPrevNextAmount: 0
    },
  };

  constructor() {}

  ngOnInit(): void {
  console.log(isBrowser.toString());
  }

}
