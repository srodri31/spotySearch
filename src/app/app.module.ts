import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { SpotifyService } from './spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    AlbumDetailsComponent,
    TrackDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
