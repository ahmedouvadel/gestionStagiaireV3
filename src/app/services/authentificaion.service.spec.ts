import { TestBed } from '@angular/core/testing';

import { AuthentificaionService } from './authentificaion.service';

describe('AuthentificaionService', () => {
  let service: AuthentificaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
