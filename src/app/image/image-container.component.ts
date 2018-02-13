import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../core/image/image.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {

  @Input() image: string;

  // Image size
  @Input() xsmallSize? = '100vw';
  @Input() smallSize? = '50vw';
  @Input() mediumSize? = '25vw';
  @Input() largeSize? = '20vw';
  @Input() xlargeSize? = '15vw';

  // Aspect Ratio
  // Need for pre load
  @Input() ratio = '1:1';

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  // Lazy load settings
  @Input() lazyLoad: Boolean = true;
  @Input() offset = 0;

  private _sourceSet: string;
  private _calculatedRatio: string;

  constructor() { }

  ngOnInit() {

    // Calculation aspect ratio in order to keep
    this.calculatedRatio = ImageService.calculateAspectRatio(this.ratio);
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
