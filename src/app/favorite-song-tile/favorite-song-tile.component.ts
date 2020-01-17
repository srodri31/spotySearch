import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../models/track';
import { FavoriteSongsService } from '../favorite-songs.service';

@Component({
  selector: 'app-favorite-song-tile',
  templateUrl: './favorite-song-tile.component.html',
  styleUrls: ['./favorite-song-tile.component.css']
})
export class FavoriteSongTileComponent implements OnInit {
  @Input() song: Track;

  constructor(
    private favoriteSongsService: FavoriteSongsService
  ) { }

  ngOnInit() {
    console.log(this.song);
  }

  removeSong(id: string) {
    this.favoriteSongsService.removeSong(id);
  }

}
