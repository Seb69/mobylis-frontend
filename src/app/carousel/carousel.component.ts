import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {

  public percentage;
  private _deltaX;
  public animation = false;
  public viewPercentage;
  public slideCount = 3;
  private _activeSlide = 0;
  public slidePosition = 0;
  @Input() changePercentage = 25;
  @Input() ratio = 25;
  public calculatedRatio;

  ngOnInit(): void {
    const ratioArray: string[] = '2269:367'.split(':');
    const width: number = +ratioArray[0];
    const height: number = +ratioArray[1];

    this.calculatedRatio = String((height / width) * 100).concat('%');
  }

  onPanStart(event: any): void {
    // Stop animation
    console.log('onPanStart');
    this.animation = false;
  }

  onPanEnd(event: any): void {
    console.log('onPanEnd');

    // Start animation
    this.animation = true;

    // Velicity Check : if the user make a quick move
    if (event.overallVelocityX > 1) {
      console.log('Velocity hit : left');
      this.moveLeft();
    } else if (event.overallVelocityX < -1) {
      console.log('Velocity hit : right');
      this.moveRight();
    } else {

      // Calculate view percentage
      this.percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;
      this.viewPercentage = this.percentage * this.slideCount;

      if (Math.sign(this.viewPercentage) === 1) {
        if (this.viewPercentage > this.changePercentage) {
          console.log('swipe left');
          this.moveLeft();
        } else {
          console.log('stay');
          this.moveCenter();
        }
      } else if (Math.sign(this.viewPercentage) === -1) {
        if (this.viewPercentage < -this.changePercentage) {
          console.log('swipe right');
          this.moveRight();
        } else {
          console.log('stay');
          this.moveCenter();
        }
      }
    }

  }

  onPanMove(event: any): void {
    this.deltaX = event.deltaX - this.slidePosition;
  }

  moveCenter() {
    this.calculatPosition();
  }

  moveRight() {
    // Last slide
    if (this.activeSlide === this.slideCount - 1 ) {
    } else { // Not the last slide
      this.activeSlide = this.activeSlide + 1;
    }
    this.calculatPosition();
  }

  private calculatPosition() {
    this.slidePosition = window.innerWidth  * this.activeSlide ;
    this.deltaX = - this.slidePosition;
  }

  moveLeft() {
    // First slide
    if (this.activeSlide === 0 ) {
    } else { // Not the first slide
      this.activeSlide = this.activeSlide - 1;
    }
    this.calculatPosition();
  }

  get activeSlide(): number {
    return this._activeSlide;
  }

  set activeSlide(value: number) {
    this._activeSlide = value;
  }

  get deltaX() {
    console.log('CHANGE DETECTION');
    return this._deltaX;
  }

  set deltaX(value) {
    this._deltaX = value;
  }

}

