import { TestBed } from '@angular/core/testing';

import { EstudiosService } from './estudios.service';

describe('EstudiosService', () => {
  let service: EstudiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
