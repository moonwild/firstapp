import { TestBed, inject } from '@angular/core/testing';

import { BookoramaService } from './bookorama.service';

describe('BookoramaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookoramaService]
    });
  });

  it('should be created', inject([BookoramaService], (service: BookoramaService) => {
    expect(service).toBeTruthy();
  }));
});
