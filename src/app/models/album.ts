import { Artist } from './artist';

export class Album {
    name: string;
    id: string;
    artists: Artist[];
    images: Object[];
    releaseDate: Date;

    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.artists = data.artists;
        this.images = data.images;
        this.releaseDate = new Date(data.release_date);
    }
}