import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './models/artist';
import { Album } from './models/album';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer BQBbEaThTKHBk8lCHd_Xyhqj9EDv_-eltaa6Lb0lEwVnOC_Bn8NDKXHkjvxn3ZfUPs-3MWX-b_0Zmz_BN98'
    })
  };

  constructor(private http: HttpClient) { }

  searchArtistsByName(name: string): Observable<Artist[]> {
    if(!name.trim()){
      return of([]);
    }

    name = name.replace(/ /g, '+');
    return this.http.get("https://api.spotify.com/v1/search?q="+name+"&type=artist", this.httpOptions)
      .pipe<Artist[]>(
        map( (result: { artists: { items: null }}) => result.artists.items)
      );
  }

  getArtitst(id: string = null): Observable<Artist> {
    return this.http.get<Artist>("https://api.spotify.com/v1/artists/" + id, this.httpOptions);
  }

  getAlbum(id: string): Observable<Album> {
    return this.http.get<Album>("https://api.spotify.com/v1/albums/" + id, this.httpOptions);
  }

  getArtistAlbums(id: string = null): Observable<Album[]> {
    return this.http.get("https://api.spotify.com/v1/artists/" + id + "/albums", this.httpOptions)
      .pipe<Album[]>(
        map((result:  { items: null }) => result.items)
      );
  }
}
