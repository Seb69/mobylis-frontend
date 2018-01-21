import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../core/image/image.service';
import {LoadImageObservable} from '../service/loadImageObservable';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './carousel-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // Aspect ratio
  @Input() aspectRatio? = '1:1';

  // Image index in the carousel
  public loadImage = 0;
  @Input() index;

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;
  private _calculatedRatio: string;

  constructor(private imageService: ImageService, private loadImageObservale: LoadImageObservable, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    // Generate source set string
    this.sourceSet = this.imageService.generateCarouselUrl(this.image, this.aspectRatio);

    this.loadImageObservale.getValue().subscribe(loadImage => {
      console.log('Within observable subscriber ');

      this.loadImage = loadImage;

      // Trigger Change detection
      this.cd.markForCheck();
    });
  }

  get sourceSet(): string {
    console.log('CHANGE DETECTION');
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
