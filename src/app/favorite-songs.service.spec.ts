import { TestBed } from '@angular/core/testing';

import { FavoriteSongsService } from './favorite-songs.service';

describe('FavoriteSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteSongsService = TestBed.get(FavoriteSongsService);
    expect(service).toBeTruthy();
  });
});
