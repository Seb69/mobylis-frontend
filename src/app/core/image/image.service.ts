import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {

  // Supported image width to download
  public supportedWidth: number[] = [64, 128, 192, 256, 320, 448, 512, 640, 768, 896, 1024, 1280, 1526, 2048, 2560, 4608, 5632];

  // Global parameters
  private _projectId = 'dqismn81g';
  private _scheme = 'https';
  private _cloudinaryHostName = 'res.cloudinary.com';

  // Default Transformations
  private _formatAuto = 'f_auto';
  private _qualityAuto = 'q_auto';
  private _backgroundAuto = 'b_auto';
  private _pad = 'c_pad';

  // Cloudinary URL
  private _cloudinaryUrl = this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/';

  static calculateAspectRatio(ratio: string): string {

    const ratioArray: string[] = ratio.split(':');
    const width: number = +ratioArray[0];
    const height: number = +ratioArray[1];

    return String((height / width) * 100).concat('%');
  }

  constructor() {
  }

  generateUrl(image: string): string {

    const commonTransformation: string = this.formatAuto + ',' + this.qualityAuto + ',w_';

    const imageUrl: string = '/' + image + ' ';

    return this.supportedWidth
      .map(width => {

        const transformations: string = commonTransformation + width;
        return this.cloudinaryUrl + transformations + imageUrl + width + 'w';
      })
      .join(',');
  }

  generateCarouselUrl(image: string, aspectRatio: string): string {
    const commonTransformation: string = this.formatAuto + ','
      + this.backgroundAuto + ','
      + this.pad + ','
      + this.qualityAuto + ',ar_'
      + aspectRatio + ',w_';

    const imageUrl: string = '/' + image + ' ';

    return this.supportedWidth
      .map(width => {

        const transformations: string = commonTransformation + width;
        return this.cloudinaryUrl + transformations + imageUrl + width + 'w';
      })
      .join(',');
  }

  get scheme(): string {
    return this._scheme;
  }

  get projectId(): string {
    return this._projectId;
  }

  get cloudinaryHostName(): string {
    return this._cloudinaryHostName;
  }

  get qualityAuto(): string {
    return this._qualityAuto;
  }

  get formatAuto(): string {
    return this._formatAuto;
  }

  get pad(): string {
    return this._pad;
  }

  get backgroundAuto(): string {
    return this._backgroundAuto;
  }

  get cloudinaryUrl(): string {
    return this._cloudinaryUrl;
  }

}
