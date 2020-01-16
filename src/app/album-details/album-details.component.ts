import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { FavoriteSongsService } from '../favorite-songs.service';
import { Track } from '../models/track';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute,
    private favoriteSongs: FavoriteSongsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.spotify.getAlbum(params.id).subscribe(album => {
        this.album = album;
      })
    })
  }

  addFavoriteSong(song: Track): void {
    this.favoriteSongs.addSong(song);
  }

}
