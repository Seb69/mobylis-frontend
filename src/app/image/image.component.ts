import {ApplicationRef, ChangeDetectionStrategy, Component, Input, NgZone, OnInit} from '@angular/core';
import {ImageService} from './image.service';
import {SizeSet} from './size-set';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  @Input() position: string;

  // Image size
  @Input() xsmallSize? = '100vw';
  @Input() smallSize? = '50vw';
  @Input() mediumSize? = '25vw';
  @Input() largeSize? = '20vw';
  @Input() xlargeSize? = '15vw';

  // Aspect Ratio
  // Need for pre load
  @Input() ratio: string;

  // Lazy load
  @Input() lazyLoad: Boolean = true;

  private _sourceSet: string;

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _calculatedRatio: string;

  constructor(private imageService: ImageService) {

  }

  ngOnInit() {
    const sizeSet: SizeSet = new SizeSet();
    sizeSet.xsmall = this.xsmallSize;
    sizeSet.small = this.smallSize;
    sizeSet.medium = this.mediumSize;
    sizeSet.large = this.largeSize;
    sizeSet.xlarge = this.xlargeSize;

    this.calculatedRatio = this.imageService.calculateAspectRatio(this.ratio);
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
