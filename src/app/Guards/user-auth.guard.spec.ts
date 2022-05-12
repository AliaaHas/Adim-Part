import { TestBed } from '@angular/core/testing';

import { UserAUthGuard } from './user-auth.guard';

describe('UserAUthGuard', () => {
  let guard: UserAUthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAUthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
