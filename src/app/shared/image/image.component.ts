import {Component, Input, OnInit} from '@angular/core';
import {ImageUrlGeneratorService} from './image-url-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  get largeBreakpoint(): string {
    return this._largeBreakpoint;
  }

  set largeBreakpoint(value: string) {
    this._largeBreakpoint = value;
  }
  get mediumBreakpoint(): string {
    return this._mediumBreakpoint;
  }

  set mediumBreakpoint(value: string) {
    this._mediumBreakpoint = value;
  }
  get smallBreakpoint(): string {
    return this._smallBreakpoint;
  }

  set smallBreakpoint(value: string) {
    this._smallBreakpoint = value;
  }
  get breakpoints(): string {
    return this._breakpoints;
  }

  set breakpoints(value: string) {
    this._breakpoints = value;
  }

  @Input() image: string;
  @Input() borderWidth?: string;
  @Input() borderColor?: string;

  // Image size
  @Input() smallSize? = '100vw';
  @Input() mediumSize? = '50vw';
  @Input() largeSize? = '25vw';

  @Input() maxSize? = '600px';
  @Input() largeSize? = '50vw';
  @Input() smallSize? = '100vw';

  // Lazy load
  @Input() lazyLoad: Boolean = true;

  private _sourceSet: string;
  private _sourceImage: string;
  private _breakpoints: string;

  private _smallBreakpoint: string;
  private _mediumBreakpoint: string;
  private _largeBreakpoint: string;

  constructor(private imageUrlGeneratorService: ImageUrlGeneratorService) {
  }

  ngOnInit() {
    this.sourceSet = this.imageUrlGeneratorService.generateUrl(this.image, this.borderWidth, this.borderColor);
    this.sourceImage = this.imageUrlGeneratorService.generateSourceUrl(this.image);
    this._breakpoints = this.imageUrlGeneratorService.generateSizes('d', 'd', 'd');
  }

  get sourceSet(): string {
    return this._sourceSet;
  }

  set sourceSet(value: string) {
    this._sourceSet = value;
  }
  get sourceImage(): string {
    return this._sourceImage;
  }

  set sourceImage(value: string) {
    this._sourceImage = value;
  }

}
