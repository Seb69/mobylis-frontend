import { Injectable } from '@angular/core';

@Injectable()
export class ImageUrlGeneratorService {

  public supportedWidth: number[] = [64, 128, 192, 256, 320, 512, 640, 768, 896, 1024, 1280, 1526, 2048, 2560, 4608, 5632];

  // Global parameters
  private _projectId = 'dqismn81g';
  private _scheme = 'https';
  private _cloudinaryHostName = 'res.cloudinary.com';

  constructor() { }
  generateUrl(image: string): string {

     return this.supportedWidth
       .map(width => {
     const transformations = 'f_auto,q_auto,w_' + width;
       return this.scheme + '://' + this.cloudinaryHostName + '/' + this.projectId + '/image/upload/' + transformations + '/' + image + ' ' + width + 'w';})
       .join((','));
  }
  get scheme(): string {
    return this._scheme;
  }

  set scheme(value: string) {
    this._scheme = value;
  }

  set projectId(value: string) {
    this._projectId = value;
  }

  get projectId(): string {
    return this._projectId;
  }

  get cloudinaryHostName(): string {
    return this._cloudinaryHostName;
  }

  set cloudinaryHostName(value: string) {
    this._cloudinaryHostName = value;
  }
}
