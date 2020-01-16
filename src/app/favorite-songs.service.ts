import { Injectable } from '@angular/core';
import { Track } from './models/track';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {
  favoriteSongs: Track[] = [];

  constructor() { }

  addSong(song: Track): void {
    this.favoriteSongs.push(song);
    localStorage.setItem("favoriteSongs", JSON.stringify(this.favoriteSongs));
  }

  getSongs() {
    let songsString: string = localStorage.getItem("favoriteSongs") || "[]";
    this.favoriteSongs = JSON.parse(songsString);
    return this.favoriteSongs;
  }
}
