import {Component, Input, OnInit} from '@angular/core';
import {ImageUrlGeneratorService} from './image-url-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  @Input() maxSize? = '600px';
  @Input() largeSize? = '50vw';
  @Input() smallSize? = '100vw';
  private _sourceSet: string;

  constructor(private imageUrlGeneratorService: ImageUrlGeneratorService) {
  }

  ngOnInit() {
    this._sourceSet = this.imageUrlGeneratorService.generateUrl(this.image);
  }

  get sourceSet(): string {
    return this._sourceSet;
  }

  set sourceSet(value: string) {
    this._sourceSet = value;
  }

}
