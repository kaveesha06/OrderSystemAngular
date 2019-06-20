import { TestBed } from '@angular/core/testing';

import { AmendOrderService } from './amend-order.service';

describe('AmendOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmendOrderService = TestBed.get(AmendOrderService);
    expect(service).toBeTruthy();
  });
});
