import { TestBed } from '@angular/core/testing';

import { AllProfileService } from './all-profile.service';

describe('AllProfileService', () => {
  let service: AllProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
