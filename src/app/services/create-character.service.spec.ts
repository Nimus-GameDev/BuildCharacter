import { TestBed } from '@angular/core/testing';

import { CreateCharacterService } from './create-character.service';

describe('CreatePersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCharacterService = TestBed.get(CreateCharacterService);
    expect(service).toBeTruthy();
  });
});
