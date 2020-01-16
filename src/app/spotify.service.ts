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
      'Authorization': 'Bearer BQD3TmUQwYaZtPD3y3WA6fD2A5rBj5aEjpCjksa9X5Bf5BO9JIWTEVZEP7ntpXRliRllvJPCOJBpatI_5t0'
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

  getArtistAlbums(id: string = null): Observable<Album[]> {
    return this.http.get("https://api.spotify.com/v1/artists/" + id + "/albums", this.httpOptions)
      .pipe<Album[]>(
        map((result:  { items: null }) => result.items)
      );
  }
}
