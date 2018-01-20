import {Component} from '@angular/core';

@Component({
  selector: 'demo-one',
  styleUrls: ['./avatar.component.scss'],
  templateUrl: './avatar.component.html',
})
export class DemoOne {
  get transformPercentage() {
    console.log('CHANGE DETECTION');
    return this._transformPercentage;
  }

  set transformPercentage(value) {
    this._transformPercentage = value;
  }
  public x = 0;
  public y = 0;
  public percentage;
  private _transformPercentage;
  public viewPercentage;
  public slideCount = 3;
  public activeSlide = 0;
  public sensitivity = 25;

  private startX = 0;
  private startY = 0;

  onPanStart(event: any): void {
    this.startX = this.x;
    this.startY = this.y;
  }

  onPanEnd(event: any): void {

    this.viewPercentage = this.percentage * this.slideCount;
    console.log(event);

    // Velicity Check : if the user make a quick move

    //
    if (event.overallVelocityX > 1) {
      console.log('Velocity hit : left');

    } else if (event.overallVelocityX < -1) {
      console.log('Velocity hit : right');
    } else {

      if (Math.sign(this.viewPercentage) === 1) {
        if (this.viewPercentage > 25) {
          console.log('swipe left');
          this.moveLeft();
        } else {
          console.log('stay');
          this.moveCenter();
        }
      } else if (Math.sign(this.viewPercentage) === -1) {
        if (this.viewPercentage < -25) {
          console.log('swipe right');
          this.moveRight();
        } else {
          console.log('stay');
          this.moveCenter();
        }
      }
    }

  }

  moveCenter() {
    this._transformPercentage = - (this.activeSlide / this.slideCount) * 100;
  }

  moveRight() {
    // Last slide
    if (this.activeSlide === this.slideCount - 1 ) {
      this._transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    } else { // Not the last slide
      this.activeSlide = this.activeSlide + 1;
      this._transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    }
  }


  moveLeft() {
    // First slide
    if (this.activeSlide === 0 ) {
      this._transformPercentage = 0;
    } else { // Not the first slide
      this.activeSlide = this.activeSlide - 1;
      this._transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    }
  }



  onPan(event: any): void {

    this.percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;
    this._transformPercentage = ((100 * event.deltaX / (this.slideCount * window.innerWidth)) - (100 / this.slideCount * this.activeSlide));

    // var transformPercentage = percentage - 100 / slideCount * activeSlide;
  }


}

