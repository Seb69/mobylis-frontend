import {Injectable, OnInit} from '@angular/core';

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

  constructor() {
  }

  generateUrl(image: string): string {

    return this.supportedWidth
      .map(width => {

        const transformations: string = this.formatAuto + ',' + this.qualityAuto + ',w_' + width;
        return this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/' + transformations + '/' + image + ' ' + width + 'w';
      })
      .join(',');
  }

  calculateAspectRatio(ratio: string): string {

    const ratioArray: string[] = ratio.split(':');
    const width: number = +ratioArray[0];
    const height: number = +ratioArray[1];

    return String((height / width) * 100).concat('%');
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

}
