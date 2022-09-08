import { TestBed } from '@angular/core/testing';

import { DonutcartService } from './donutcart.service';

describe('DonutcartService', () => {
  let service: DonutcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
