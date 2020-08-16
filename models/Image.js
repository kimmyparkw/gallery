const db = require('../db/config')

class Image {
  constructor({id, title, artist, url}) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.url = url
  }

  static getAll() {
    console.log(db);
    return db
    .manyOrNone('SELECT * FROM images ORDER BY id ASC')
    .then((images)=>{
      return images.map(image => new this(image))
    })
  }

  static getById(id) {
    return db
    .oneOrNone('SELECT * FROM images WHERE id = $1', id)
    .then((image) => {
      if (image) return new this(image)
      throw new Error('Image not found')
    })
  }
}


module.exports = Image
