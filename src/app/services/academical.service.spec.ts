import { TestBed } from '@angular/core/testing';

import { AcademicalService } from './academical.service';

describe('AcademicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicalService = TestBed.get(AcademicalService);
    expect(service).toBeTruthy();
  });
});
