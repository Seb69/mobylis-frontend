import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../core/image/image.service';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss']
})
export class CarouselImageComponent implements OnInit {

  @Input() image: string;

  // Image size
  @Input() xsmallSize? = '100vw';
  @Input() smallSize? = '50vw';
  @Input() mediumSize? = '25vw';
  @Input() largeSize? = '20vw';
  @Input() xlargeSize? = '15vw';

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;
  private _calculatedRatio: string;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    // Generate source set string
    this.sourceSet = this.imageService.generateUrl(this.image);
  }

  get sourceSet(): string {
    return this._sourceSet;
  }

  set sourceSet(value: string) {
    this._sourceSet = value;
  }

  get calculatedRatio(): string {
    return this._calculatedRatio;
  }

  set calculatedRatio(value: string) {
    this._calculatedRatio = value;
  }
}
