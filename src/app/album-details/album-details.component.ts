import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.spotify.getAlbum(params.id).subscribe(album => {
        this.album = album;
      })
    })
  }

}
