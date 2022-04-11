import { TestBed } from '@angular/core/testing';

import { ExperiencialaboralService } from './experiencialaboral.service';

describe('ExperiencialaboralService', () => {
  let service: ExperiencialaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencialaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
