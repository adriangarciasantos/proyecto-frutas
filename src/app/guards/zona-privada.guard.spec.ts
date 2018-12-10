import { TestBed, async, inject } from '@angular/core/testing';

import { ZonaPrivadaGuard } from './zona-privada.guard';

describe('ZonaPrivadaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonaPrivadaGuard]
    });
  });

  it('should ...', inject([ZonaPrivadaGuard], (guard: ZonaPrivadaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
