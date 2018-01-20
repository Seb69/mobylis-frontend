import {Component} from '@angular/core';

@Component({
  selector: 'demo-one',
  styleUrls: ['./avatar.component.scss'],
  templateUrl: './avatar.component.html',
})
export class DemoOne {

  public percentage;
  public deltaX;
  private _transformPercentage;
  public animation = false;
  public viewPercentage;
  public slideCount = 3;
  public activeSlide = 0;
  public sensitivity = 25;


  onPanStart(event: any): void {
    // Stop animation
    this.animation = false;
  }

  onPanEnd(event: any): void {

    // Start animation
    this.animation = true;

    // this.viewPercentage = this.percentage * this.slideCount;
    this.viewPercentage = this.percentage * this.slideCount;
    console.log(event);


    // Velicity Check : if the user make a quick move
    if (event.overallVelocityX > 1) {
      console.log('Velocity hit : left');
      this.moveLeft();
    } else if (event.overallVelocityX < -1) {
      console.log('Velocity hit : right');
      this.moveRight();
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
    this.transformPercentage = - (this.activeSlide / this.slideCount) * 100;
  }

  moveRight() {
    // Last slide
    if (this.activeSlide === this.slideCount - 1 ) {
      this.transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    } else { // Not the last slide
      this.activeSlide = this.activeSlide + 1;
      this.transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    }
  }


  moveLeft() {
    // First slide
    if (this.activeSlide === 0 ) {
      this.transformPercentage = 0;
    } else { // Not the first slide
      this.activeSlide = this.activeSlide - 1;
      this.transformPercentage = - (this.activeSlide / this.slideCount) * 100;
    }
  }



  onPanMove(event: any): void {

    this.deltaX = event.deltaX;

    // this.percentage = 100 / this.slideCount * event.deltaX / window.innerWidth;
    // this._transformPercentage = ((100 * event.deltaX / (this.slideCount * window.innerWidth)) - ((100 / this.slideCount) * this.activeSlide));
  }

  get transformPercentage() {
    console.log('CHANGE DETECTION');
    return this._transformPercentage;
  }

  set transformPercentage(value) {
    this._transformPercentage = value;
  }

}

