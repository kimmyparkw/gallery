const db = require('../db/config')

class Gallery {
  constructor(gallery) {
    this.id = gallery.id;
    this.name = gallery.name;
    this.description = gallery.description;
    this.user_id = gallery.user_id;
  }

  static getAll() {
    return db
    .manyOrNone('SELECT * FROM galleries WHERE id = $1', user_id)
    .then((galleries) => {
      return galleries.map(gallery => new this(gallery))
    })
  }

  static getById(id) {
    return db
    .oneOrNone('SELECT * FROM galleries WHERE id = $1', id)
    .then((gallery) => {
      if (gallery) return new this(gallery);
      throw new Error('Gallery not found')
    })
  }

  save() {
    return db
    .one(`INSERT INTO galleries (name, description, user_id)
    VALUES ($/name/, $/description/, $/user_id/)
    RETURNING *`,
      this
    )
    .then((gallery) => {
      return Object.assign(this, gallery)
    })
  }

  update(changes) {
    Object.assign(this, changes)
    return db
    .oneOrNone(`UPDATE galleries SET
      name = $/name/,
      description = $/description/
      WHERE id = $/id/
      RETURNING *`,
        this
      )
      .then((gallery) => {
        return Object.assign(this, gallery)
      })
  }

  delete() {
    return db.oneOrNone('DELETE FROM galleries WHERE id = $1', this.id)
  }

  findGalleryImages() {
    return db
    //.manyOrNone(JOIN STATEMENT QUERY GOES HERE. FIND THE IMAGES THAT CORRELATE TO THE GALLERY WITH THE GALLERY ID THAT IS REQUIRED)
  }
}


module.exports = Gallery
