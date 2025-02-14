export class FlickrImageModel {
    constructor({ media, title, author, published, tags }) {
      this.imageUrl = media.m;
      this.title = title;
      this.author = author;
      this.published = published;
      this.tags = tags;
    }
  }
  