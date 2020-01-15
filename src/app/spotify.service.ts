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
      'Authorization': 'Bearer BQCJ_xiIDMrPEu7ZUufSIFKGp8tjNS7ibt9uKuwLfECkPFDPk5s_Twxc8G2YNLlNrkm9lwsQaKbdSK33sxU'
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
}
