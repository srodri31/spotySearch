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
import { FavoriteSongsService } from './favorite-songs.service';
import { FavoriteSongsComponent } from './favorite-songs/favorite-songs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteSongTileComponent } from './favorite-song-tile/favorite-song-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    AlbumDetailsComponent,
    TrackDetailsComponent,
    FavoriteSongsComponent,
    DashboardComponent,
    FavoriteSongTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    SpotifyService,
    FavoriteSongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
