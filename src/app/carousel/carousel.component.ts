import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../core/image/image.service';
import {LoadImageObservable} from './service/loadImageObservable';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {

  private _deltaX;
  public animation = false;
  public slideCount = 3;
  private _activeSlide = 0;
  public slidePosition = 0;

  // Lazy laod
  public loadImage = 0;

  // Percentage of the image slide to move image
  @Input() changePercentage = 25;

  // Aspect ratio of the image
  @Input() ratio = '1:1';
  // Image of the carousel
  @Input() images: string[];

  public calculatedRatio;

  constructor(private loadImageObservable: LoadImageObservable) {
  }

  ngOnInit(): void {
    this.slideCount = this.images.length;
    // Calculate aspect ratio
    this.calculatedRatio = ImageService.calculateAspectRatio(this.ratio);
  }

  onPanStart(): void {
    // Stop animation
    this.animation = false;

    // LAZY Load
    // Check whether the user remain on the same image
    // If the user reach the last image => not increment loadImage
    if (this.activeSlide === this.loadImage && this.activeSlide < this.slideCount - 1) {
      this.loadImage += 1;
      this.loadImageObservable.changeValue(this.loadImage);
    }
  }

  onPanEnd(event: any): void {

    // Start animation
    this.animation = true;

    // Velocity Check : if the user make a quick move
    if (event.overallVelocityX > 1) {
      this.moveLeft();
    } else if (event.overallVelocityX < -1) {
      this.moveRight();
    } else {

      // Calculate view percentage
      const percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;
      const viewPercentage = percentage * this.slideCount;

      if (Math.sign(viewPercentage) === 1) {
        if (viewPercentage > this.changePercentage) {
          this.moveLeft();
        } else {
          this.moveCenter();
        }
      } else if (Math.sign(viewPercentage) === -1) {
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
    this.setDeltaXPosition();
  }

  moveRight() {
    // Last slide
    if (this.activeSlide === this.slideCount - 1 ) {
    } else { // Not the last slide
      this.activeSlide = this.activeSlide + 1;
    }
    this.setDeltaXPosition();
  }

  moveLeft() {
    // First slide
    if (this.activeSlide === 0 ) {
    } else { // Not the first slide
      this.activeSlide = this.activeSlide - 1;
    }
    this.setDeltaXPosition();
  }

  private setDeltaXPosition() {
    this.deltaX = - window.innerWidth  * this.activeSlide ;
    this.slidePosition = - this.deltaX;
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

