import { TestBed } from '@angular/core/testing';

import { PromocaoService } from './promocao.service';

describe('PromocaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromocaoService = TestBed.get(PromocaoService);
    expect(service).toBeTruthy();
  });
});
