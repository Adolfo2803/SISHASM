import { TestBed } from '@angular/core/testing';

import { TablaArchiService } from './tabla-archi.service';

describe('TablaArchiService', () => {
  let service: TablaArchiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaArchiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
