import { Injectable } from '@angular/core';
import { Track } from './models/track';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {
  favoriteSongs: Track[] = [];

  constructor() { 
    this.getSongs();
  }

  addSong(song: Track): void {
    this.favoriteSongs.push(song);
    localStorage.setItem("favoriteSongs", JSON.stringify(this.favoriteSongs));
  }

  getSongs() {
    let songsString: string = localStorage.getItem("favoriteSongs") || "[]";
    this.favoriteSongs = JSON.parse(songsString);
    return this.favoriteSongs;
  }

  removeSong(id: string) {
    this.favoriteSongs = this.favoriteSongs.filter( song => song.id !== id );
    localStorage.setItem("favoriteSongs", JSON.stringify(this.favoriteSongs));
  }

  isFavoriteSong({id}): boolean {
    let song: Track = null;
    
    song = this.favoriteSongs.find( (track: Track) =>{
      return track.id === id
    });
    return !!song;
  }
}
