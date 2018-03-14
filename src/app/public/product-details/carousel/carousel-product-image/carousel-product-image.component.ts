import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../../core/image/image.service';

@Component({
  selector: 'app-product-responsive-image',
  templateUrl: './carousel-product-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./carousel-product-image.component.scss']
})
export class CarouselProductImageComponent implements OnInit {

  @Input() image: string;

  // Image size
  @Input() xsmallSize;
  @Input() smallSize?;
  @Input() mediumSize?;
  @Input() largeSize?;
  @Input() xlargeSize?;

  // Size unit
  @Input() sizeUnit? = 'vw';

  // Aspect ratio
  @Input() aspectRatio? = '1:1';

  // Image index in the carousel
  @Input() index;

  private _loadImage;

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;
  private _calculatedRatio: string;

  constructor(private imageService: ImageService, private ref: ChangeDetectorRef) {
    ref.detach();
  }

  ngOnInit() {
    // Generate source set string
    this.sourceSet = this.imageService.generateCarouselUrl(this.image, this.aspectRatio);
    this.ref.detectChanges();

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

  get loadImage() {
    return this._loadImage;
  }

  @Input()
  set loadImage(value) {
    this._loadImage = value;
    if (this._loadImage <= this.index && value !== 0 ) {
      this.ref.detectChanges();
    }
  }
}
