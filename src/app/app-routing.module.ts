import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'track/:id', component: TrackDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }