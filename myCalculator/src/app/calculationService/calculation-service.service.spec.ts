import { TestBed } from '@angular/core/testing';

import { CalculationServiceService } from './calculation-service.service';

describe('CalculationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationServiceService = TestBed.get(CalculationServiceService);
    expect(service).toBeTruthy();
  });
});
