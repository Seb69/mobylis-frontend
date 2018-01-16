import {Injectable} from '@angular/core';
import {SizeSet} from './size-set';

@Injectable()
export class ImageService {

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
      .join((','));
  }

  calculateAspectRatio(ratio: string): string {

    const ratioArray: string[] = ratio.split(':');
    const width: number = +ratioArray[0];
    const height: number = +ratioArray[1];

    return String((height / width) * 100).concat('%');
  }

  windowsWidth(sizeSet: SizeSet): string {
    const windowWidth: number = window.innerWidth;
    if (windowWidth < 600) {
       return sizeSet.xsmall;
    } else if (windowWidth < 960) {
      return sizeSet.small;
    } else if (windowWidth < 1280) {
      return sizeSet.medium;
    } else if (windowWidth < 1920) {
      return sizeSet.large;
    } else {
      return sizeSet.xlarge;
    }

  }

  generateSourceUrl(image: string): string {

    const transformations = this.formatAuto + ',' + this.qualityAuto + ',w_512';

    return this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/' + transformations + '/' + image;
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
