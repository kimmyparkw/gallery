const db = require('../db/config')

class Image {
  constructor({id, title, artist, url}) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.url = url
  }

  static getById(id) {
    return db
    .oneOrNone('SELECT * FROM images WHERE id = $1', id)
  }
}
