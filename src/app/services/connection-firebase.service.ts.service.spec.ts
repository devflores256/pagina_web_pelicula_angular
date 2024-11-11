import { TestBed } from '@angular/core/testing';

import { ConnectionFirebaseServiceTsService } from './connection-firebase.service.ts.service';

describe('ConnectionFirebaseServiceTsService', () => {
  let service: ConnectionFirebaseServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionFirebaseServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
