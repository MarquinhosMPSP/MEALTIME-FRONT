import { TestBed } from '@angular/core/testing';

import { CadastroRestauranteService } from './cadastro-restaurante.service';

describe('CadastroRestauranteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroRestauranteService = TestBed.get(CadastroRestauranteService);
    expect(service).toBeTruthy();
  });
});
