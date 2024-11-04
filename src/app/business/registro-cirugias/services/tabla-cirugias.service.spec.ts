import { TestBed } from '@angular/core/testing';

import { CirugiasService } from './cirugias.service';

describe('TablaCirugiasService', () => {
  let service: CirugiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirugiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
