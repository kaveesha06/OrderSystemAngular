import { TestBed } from '@angular/core/testing';

import { JmsService } from './jms.service';

describe('JmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JmsService = TestBed.get(JmsService);
    expect(service).toBeTruthy();
  });
});
