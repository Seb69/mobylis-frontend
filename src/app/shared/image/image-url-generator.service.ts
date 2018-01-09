import {Injectable} from '@angular/core';

@Injectable()
export class ImageUrlGeneratorService {

  public supportedWidth: number[] = [64, 128, 192, 256, 320, 512, 640, 768, 896, 1024, 1280, 1526, 2048, 2560, 4608, 5632];

  // Global parameters
  private _projectId = 'dqismn81g';
  private _scheme = 'https';
  private _cloudinaryHostName = 'res.cloudinary.com';
  private _formatAuto = 'f_auto';
  private _qualityAuto = 'q_auto';

  constructor() {
  }

  generateUrl(image: string, borderWidth?: string, borderColor?: string): string {

    return this.supportedWidth
      .map(width => {

        let transformations: string = this.formatAuto + ',' + this.qualityAuto + ',w_' + width;

        if (borderWidth != null || borderColor != null) {
          transformations = transformations + this.borderTransformation(borderWidth, borderColor);
        }

        return this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/' + transformations + '/' + image + ' ' + width + 'w';
      })
      .join((','));
  }

  generateSourceUrl(image: string): string {

    const transformations = this.formatAuto + ',' + this.qualityAuto + ',w_512';

    return this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/' + transformations + '/' + image;
  }


  generateSizes(smallSize: string, middleSize: string, largeSize: string): string {

    const transformations = this.formatAuto + ',' + this.qualityAuto + ',w_512';

    return 'test';
  }

  borderTransformation(borderWidth: string, borderColor: string): string {
    if (borderWidth != null || borderColor != null) {
      if (borderColor == null) {
        return ',bo_' + borderWidth + '_solid_white';
      } else if (borderWidth == null) {
        return ',bo_10px_solid_' + borderColor;
      } else {
        return ',bo_' + borderWidth + '_solid_' + borderColor;
      }
    } else {
      return null;
    }
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
