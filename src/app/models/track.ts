export class Track {
    name: string;
    preview_url: string;
    id: string;

    constructor(data) {
        this.name = data.name;
        this.preview_url = data.preview_url;
        this.id = data.id;
    }
}