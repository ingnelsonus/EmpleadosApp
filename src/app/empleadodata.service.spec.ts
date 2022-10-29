import { TestBed } from '@angular/core/testing';

import { EmpleadodataService } from './empleadodata.service';

describe('EmpleadodataService', () => {
  let service: EmpleadodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
