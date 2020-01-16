import { Artist } from './artist';
import { Track } from './track';

export class Album {
    name: string;
    id: string;
    artists: Artist[];
    images: Object[];
    release_date: Date;
    genres: Object[];
    tracks: {
        items: Track[]
    };

    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.artists = data.artists;
        this.images = data.images;
        this.release_date = new Date(data.release_date);
        this.genres = data.genres;
    }
}