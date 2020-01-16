import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService }  from '../spotify.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: Artist;
  albums: Album[];

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.spotify.getArtitst(params.id).subscribe( artist => {
        this.artist = artist;
      })
      this.spotify.getArtistAlbums(params.id).subscribe( albums => {
        this.albums = albums;
      })
    })
  }

}
