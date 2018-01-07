import { TestBed, inject } from '@angular/core/testing';

import { ImageUrlGeneratorService } from './image-url-generator.service';

describe('ImageUrlGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageUrlGeneratorService]
    });
  });

  it('should be created', inject([ImageUrlGeneratorService], (service: ImageUrlGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
