import { Component, OnInit } from '@angular/core';
import { FavoriteSongsService } from '../favorite-songs.service';
import { Track } from '../models/track';

@Component({
  selector: 'app-favorite-songs',
  templateUrl: './favorite-songs.component.html',
  styleUrls: ['./favorite-songs.component.css']
})
export class FavoriteSongsComponent implements OnInit {
  favoriteSongs: Track[];

  constructor(
    private favoriteSongsService: FavoriteSongsService
  ) { }

  ngOnInit() {
    this.favoriteSongs = this.favoriteSongsService.getSongs();
  }

}
