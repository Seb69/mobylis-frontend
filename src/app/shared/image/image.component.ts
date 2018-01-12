import {Component, Input, OnInit} from '@angular/core';
import {ImageUrlGeneratorService} from './image-url-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  @Input() position: string;
  @Input() borderWidth?: string;
  @Input() borderColor?: string;

  // Image size
  @Input() smallSize? = '100vw';
  @Input() mediumSize? = '50vw';
  @Input() largeSize? = '25vw';

  // Lazy load
  @Input() lazyLoad: Boolean = true;

  private _sourceSet: string;
  private _sourceImage: string;
  private _breakpoints: string;

  smallBreakpoint = '600px';
  mediumBreakpoint= '960px';
  largeBreakpoint= '1280px';

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
