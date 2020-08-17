const Gallery = require('../models/Gallery')

const galleryController = {

  index(req, res, next) {
    Gallery.getAll()
      .then((galleries) => {
        res.render('galleries/index', {
          galleries,
        })
      })
      .catch(next)
  },

  show(req, res, next) {
    Gallery.getById(req.params.id)
    .then((gallery) => {
      res.locals.gallery = gallery;
      next();
    })
    .catch(next)
  },

  create(req, res, next) {
    new Gallery({
      name: req.body.name,
      description: req.body.description,
      user_id: req.user.id,
    })
    .save()
    .then(() => {
      res.redirect('/galleries')
    })
    .catch(next)
  },

  update(req, res, next) {
    Gallery.getById(req.params.id)
    .then((gallery) => {
      return gallery.update(req.body)
    })
    .then((updatedGallery) => {
      res.redirect(`/galleries/${updatedGallery.id}`)
    })
    .catch(next)
  },

  delete(req, res, next) {
    Gallery.getById(req.params.id)
    .then((gallery) => {
      return gallery.delete()
    })
    .then(() => {
      res.redirect('/user')
    })
    .catch(next)
  }
}

module.exports = galleryController
