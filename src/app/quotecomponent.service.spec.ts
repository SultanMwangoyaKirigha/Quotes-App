import { TestBed } from '@angular/core/testing';

import { QuotecomponentService } from './quotecomponent.service';

describe('QuotecomponentService', () => {
  let service: QuotecomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotecomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
