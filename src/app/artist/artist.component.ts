import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService }  from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: Artist;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.spotify.getArtitst(id).subscribe( artist => {
      this.artist = artist;
    })
  }

}
