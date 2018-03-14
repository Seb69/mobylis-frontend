import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../core/image/image.service';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.scss']
})
export class AdminImageComponent implements OnInit {

  @Input() image: string;

  // Image size
  @Input() xsmallSize? = '25vw';
  @Input() smallSize? = '25vw';
  @Input() mediumSize? = '25vw';
  @Input() largeSize? = '25vw';
  @Input() xlargeSize? = '25vw';

  // Aspect Ratio
  // Need for pre load
  @Input() ratio = '4:3';

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.sourceSet = this.imageService.generateCarouselUrl(this.image, this.ratio);
  }

  get sourceSet(): string {
    return this._sourceSet;
  }

  set sourceSet(value: string) {
    this._sourceSet = value;
  }
}
