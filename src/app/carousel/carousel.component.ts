import {ChangeDetectionStrategy, Component, HostListener, Inject, InjectionToken, Input, OnInit} from '@angular/core';
import {ImageService} from '../core/image/image.service';
import {LoadImageObservable} from './service/loadImageObservable';

// Needed to for server side rendering with window object
export const WINDOW = new InjectionToken('WINDOW');

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  get responsiveWidth() {
    return this._responsiveWidth;
  }

  set responsiveWidth(value) {
    this._responsiveWidth = value;
  }

  private _deltaX;
  public animation = false;
  public slideCount;
  public slideArray;
  private _activeSlide = 0;
  public slidePosition = 0;

  // Lazy load
  public loadImage = 0;

  // Percentage of the image slide to move image
  @Input() changePercentage = 25;

  // Image size
  @Input() xsmallSize? = 100;
  @Input() smallSize? = 50;
  @Input() mediumSize? = 25;
  @Input() largeSize? = 20;
  @Input() xlargeSize? = 15;

  // Aspect ratio of the image
  @Input() ratio = '1:1';

  // Image of the carousel
  @Input() images: string[];

  public calculatedRatio;

  private _responsiveWidth;

  constructor(private loadImageObservable: LoadImageObservable,
              @Inject(WINDOW) private window) {
  }

  ngOnInit(): void {
    this.slideCount = this.images.length;
    this.slideArray = new Array(this.slideCount);

    const widthFactor: number = this.getWidthFactor();
    // Calculate aspect ratio
    this.calculatedRatio = ImageService.calculateAspectRatioResponsive(this.ratio, widthFactor);
    this.responsiveWidth = this.getWidth();
  }

  onPanStart(): void {
    // Stop animation
    this.animation = false;

    // LAZY Load
    // Check whether the user remain on the same image
    // If the user reach the last image => not increment loadImage
    // if (this.activeSlide === this.loadImage && this.activeSlide < this.slideCount - 1) {
    if (this.activeSlide === 0 && this.loadImage < 1) {
      this.loadImage += 1;
      this.loadImageObservable.changeValue(this.loadImage);
    }
  }

  onPanEnd(event: any): void {

    // Velocity Check : if the user make a quick move
    if (event.overallVelocityX > 1) {
      this.moveLeft();
    } else if (event.overallVelocityX < -1) {
      this.moveRight();
    } else {

      // Calculate view percentage
      const percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;
      const viewPercentage = percentage * this.slideCount;

      if (Math.sign(viewPercentage) === 1) { // Left pan move
        if (viewPercentage > this.changePercentage) {
          this.moveLeft();
        } else {
          this.moveCenter();
        }
      } else if (Math.sign(viewPercentage) === -1) { // Right pan move
        if (viewPercentage < -this.changePercentage) {
          this.moveRight();

        } else {
          this.moveCenter();
        }
      }
    }

  }


  // On pan move translate image
  onPanMove(event: any): void {
    this.deltaX = event.deltaX - this.slidePosition;
  }

  moveCenter() {
    this.animation = true;
    this.setDeltaXPosition();
  }

  moveRight() {
    // Start animation
    this.animation = true;
    // Last slide
    if (this.activeSlide === this.slideCount - 1) {
    } else { // Not the last slide
      // Check if the loadImage is the last one or not
      if (this.loadImage !== this.slideCount) {
        // If first lazy load slide => load the following one
        if (this.loadImage === 0) {
          this.loadImage += 2;
        } else {
          this.loadImage += 1;
        }
        this.loadImageObservable.changeValue(this.loadImage);
      }
      this.activeSlide = this.activeSlide + 1;
    }
    this.setDeltaXPosition();
  }

  moveLeft() {
    console.log('on move left');
    // Start animation
    this.animation = true;

    // First slide
    if (this.activeSlide === 0) {
    } else { // Not the first slide
      this.activeSlide = this.activeSlide - 1;
    }
    this.setDeltaXPosition();
  }

  onResize() {
    if (this.animation !== false) {
      this.animation = false;
    }
    this.setDeltaXPosition();
    const widthFaxctor: number = this.getWidthFactor();
    // Calculate aspect ratio
    this.calculatedRatio = ImageService.calculateAspectRatioResponsive(this.ratio, widthFaxctor);
  }

  private setDeltaXPosition() {

    let widthFactore: number;
    const windowWidth: number = window.innerWidth;

    if (windowWidth <= 599) {
      widthFactore = this.xsmallSize / 100;
    } else if (windowWidth >= 600 && windowWidth <= 959) {
      widthFactore = this.smallSize / 100;
    } else if (windowWidth >= 960 && windowWidth <= 1279) {
      widthFactore = this.mediumSize / 100;
    } else if (windowWidth >= 1280 && windowWidth <= 1919) {
      widthFactore = this.largeSize / 100;
    } else {
      widthFactore = this.xlargeSize / 100;
    }

    this.deltaX = -window.innerWidth * this.activeSlide * widthFactore;
    this.slidePosition = -this.deltaX;
  }

  getWidth(): string {

    const windowWidth: number = window.innerWidth;

    if (windowWidth <= 599) {
      return this.xsmallSize + 'vw';
    } else if (windowWidth >= 600 && windowWidth <= 959) {
      return this.smallSize + 'vw';
    } else if (windowWidth >= 960 && windowWidth <= 1279) {
      return this.mediumSize + 'vw';
    } else if (windowWidth >= 1280 && windowWidth <= 1919) {
      return this.largeSize + 'vw';
    } else {
      return this.xlargeSize + 'vw';
    }
  }

  getWidthFactor(): number {

    const windowWidth: number = window.innerWidth;

    if (windowWidth <= 599) {
      return this.xsmallSize / 100;
    } else if (windowWidth >= 600 && windowWidth <= 959) {
      return this.smallSize / 100;
    } else if (windowWidth >= 960 && windowWidth <= 1279) {
      return this.mediumSize / 100;
    } else if (windowWidth >= 1280 && windowWidth <= 1919) {
      return this.largeSize / 100;
    } else {
      return this.xlargeSize / 100;
    }
  }

  get activeSlide(): number {
    return this._activeSlide;
  }

  set activeSlide(value: number) {
    this._activeSlide = value;
  }

  get deltaX() {
    return this._deltaX;
  }

  set deltaX(value) {
    this._deltaX = value;
  }

}

