const db = require('../db/config')
const Gallery = require('./Gallery')

class User {
  constructor({id, name, username, email, password_digest}) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password_digest = password_digest;
  }

  static findByUserName(username) {
    return db
    .oneOrNone('SELECT * FROM users WHERE username = $1', username)
    .then((user) => {
      if (user) return new this(user);
      throw new Error('No user found')
    })
  }

  static getById(id) {
    return db
    .oneOrNone('SELECT * FROM users WHERE id = $1', id)
    .then((user) => {
      if (user) return new this(user);
      throw new Error('No user found')
    })
  }

  save() {
    return db
    .one(`INSERT INTO users (name, username, email, password_digest)
    VALUES ($/name/, $/username/, $/email/, $/password_digest/)
    RETURNING *`,
      this
    )
    .then((savedUser) => {
      return Object.assign(this, savedUser)
    })
  }

  findUserGalleries() {
    return db
    .manyOrNone(`SELECT * FROM galleries WHERE user_id = $1`, this.id)
    //changing from here down
    .then((galleries) => {
      return galleries.map((gallery) => new Gallery(gallery))
    })
  }
}

module.exports = User
