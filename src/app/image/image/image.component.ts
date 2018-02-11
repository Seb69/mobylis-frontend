import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../core/image/image.service';

@Component({
  selector: 'app-image',
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
  @Input() ratio = '1:1';

  // Lazy load settings
  @Input() lazyLoad: Boolean = true;
  @Input() offset = 0;

  smallBreakpoint = '599px';
  mediumBreakpoint = '959px';
  largeBreakpoint = '1279px';
  xlargeBreakpoint = '1919px';

  private _sourceSet: string;

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

}
