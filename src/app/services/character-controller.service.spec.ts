import { TestBed } from '@angular/core/testing';

import { CharacterControllerService } from './character-controller.service';

describe('PersonControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterControllerService = TestBed.get(CharacterControllerService);
    expect(service).toBeTruthy();
  });
});
