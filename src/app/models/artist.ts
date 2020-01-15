export class Artist {
    genres: string[];
    id: string;
    name: string;
    images: Object[];

    constructor(data) {
        this.genres = data.genres;
        this.id = data.id;
        this.name = data.name;
        this.images = data.images;
    }
}