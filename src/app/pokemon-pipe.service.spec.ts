import { TestBed } from '@angular/core/testing';

import { PokemonPipeService } from './pokemon-pipe.service';

describe('PokemonPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonPipeService = TestBed.get(PokemonPipeService);
    expect(service).toBeTruthy();
  });
});
