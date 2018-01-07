import { TestBed, inject } from '@angular/core/testing';

import { UrlGeneratorService } from './url-generator.service';

describe('UrlGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlGeneratorService]
    });
  });

  it('should be created', inject([UrlGeneratorService], (service: UrlGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
