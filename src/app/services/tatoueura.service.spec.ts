import { TestBed } from '@angular/core/testing';

import { TatoueuraService } from './tatoueura.service';

describe('TatoueuraService', () => {
  let service: TatoueuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatoueuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
