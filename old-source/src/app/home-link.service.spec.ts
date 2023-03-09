import { TestBed } from '@angular/core/testing';

import { HomeLinkService } from './home-link.service';

describe('HomeLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeLinkService = TestBed.get(HomeLinkService);
    expect(service).toBeTruthy();
  });
});
