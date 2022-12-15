import { TestBed } from '@angular/core/testing';

import { TotsCloudStorageService } from './tots-cloud-storage.service';

describe('TotsCloudStorageService', () => {
  let service: TotsCloudStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsCloudStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
