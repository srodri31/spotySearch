import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Track } from '../models/track';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {
  song: Track;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.spotify.getTrack(params.id).subscribe( track => {
        this.song = track;
      })
    })
  }

}
