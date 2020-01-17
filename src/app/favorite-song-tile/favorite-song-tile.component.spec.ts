import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSongTileComponent } from './favorite-song-tile.component';

describe('FavoriteSongTileComponent', () => {
  let component: FavoriteSongTileComponent;
  let fixture: ComponentFixture<FavoriteSongTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteSongTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSongTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
