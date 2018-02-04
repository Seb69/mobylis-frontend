import {ChangeDetectionStrategy, Component, Input, NgZone, OnInit} from '@angular/core';
import {LoadImageObservable} from '../service/loadImageObservable';

@Component({
  selector: 'app-carousel',
  styleUrls: [
    './carousel.component.scss',
    './carousel-size.component.scss',
    './carousel-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {

  private _deltaX;
  public animation = false;
  public slideCount;
  public slideArray;
  private _activeSlide = 0;
  public slidePosition = 0;

  // Lazy load
  public loadImage = 0;

  // Percentage of the image slide to move image
  @Input() changePercentage = 20;

  // Image size
  @Input() xsmallSize;
  @Input() smallSize;
  @Input() mediumSize;
  @Input() largeSize;
  @Input() xlargeSize;

  // Aspect ratio of the image
  @Input() ratio;

  // Image of the carousel
  @Input() images: string[];

  public calculatedRatio;

  constructor(private loadImageObservable: LoadImageObservable) {
  }

  ngOnInit(): void {
    this.slideCount = this.images.length;
    this.slideArray = new Array(this.slideCount);

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

      const viewPercentage = this.calculateViewOffset(event);
      console.log(viewPercentage);

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
  }

  /**
   * Calculate in percetnage how the user has moved with image
   * @param event
   * @returns {number}
   */
  private calculateViewOffset(event: any): number {
    let percentage;

    percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;

    return percentage * this.slideCount * (100 / this.getWidth());
  }

  getWidth(): number {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 599) {
      return this.xsmallSize;
    } else if (windowWidth >= 600 && windowWidth <= 959) {
      return this.smallSize;
    } else if (windowWidth >= 960 && windowWidth <= 1279) {
      return this.mediumSize;
    } else if (windowWidth >= 1280 && windowWidth <= 1919) {
      return this.largeSize;
    } else {
      return this.xlargeSize;
    }
  }

  /**
   * calcutale the offset of the slide in pixel
   * Make keep slide
   */
  private setDeltaXPosition() {

    let windowWidth;
    let widthFactor;

    windowWidth = window.innerWidth;

    if (windowWidth <= 599) {
      widthFactor = this.xsmallSize / 100;
    } else if (windowWidth >= 600 && windowWidth <= 959) {
      widthFactor = this.smallSize / 100;
    } else if (windowWidth >= 960 && windowWidth <= 1279) {
      widthFactor = this.mediumSize / 100;
    } else if (windowWidth >= 1280 && windowWidth <= 1919) {
      widthFactor = this.largeSize / 100;
    } else {
      widthFactor = this.xlargeSize / 100;
    }

    this.deltaX = -window.innerWidth * this.activeSlide * widthFactor;
    this.slidePosition = -this.deltaX;

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

