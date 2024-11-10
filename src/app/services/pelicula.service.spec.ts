import { TestBed } from '@angular/core/testing';

import { movieService } from './pelicula.service';

describe('MovieService', () => {
  let service: movieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(movieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
