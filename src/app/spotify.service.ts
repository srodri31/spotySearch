import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './models/artist';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer BQDhjEE5187cB7f2A3sbDTKUBfoAiHBw6Zso3_IA2yawB6p8D3GWwj2VeCobY-WsDe6BELgWkwucHSXpiRM'
    })
  };

  constructor(private http: HttpClient) { }

  searchArtistsByName(name: string): Observable<Artist[]> {
    if(!name.trim()){
      return of([]);
    }

    return this.http.get("https://api.spotify.com/v1/search?q="+name+"&type=artist", this.httpOptions)
      .pipe<Artist[]>(
        map( (result: { artists: { items: null }}) => result.artists.items)
      );
  }
}
