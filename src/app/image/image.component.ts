import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImageService} from './image.service';

@Component({
  selector: 'responsive-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: string;

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
  @Input() offset = 200;

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;
  private _calculatedRatio: string;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    // Calculation aspect ratio in order to keep
    this.calculatedRatio = this.imageService.calculateAspectRatio(this.ratio);
    // Generate source set string
    this.sourceSet = this.imageService.generateUrl(this.image);
  }

  get sourceSet(): string {
    console.log('IMAGE COMPONENT : GET SOURCE SET' + this._sourceSet);
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
