import { TestBed } from '@angular/core/testing';

import { CartAPIServiceService } from './cart-apiservice.service';

describe('CartAPIServiceService', () => {
  let service: CartAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
