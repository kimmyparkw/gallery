const Image = require('../models/Image')

const imageController = {

  index(req, res, next) {
    Image.getAll()
    .then((images) => {
      res.render('images/index', {
        images,
      })
    })
    .catch(next)
  },

  show(req, res, next) {
    Image.getById(req.params.id)
    .then((image) => {
      res.locals.image = image
      next()
    })
    .catch(next)
  },

  // randomImageGrid(req, res, next) {
  //   Image.getAll()
  //   .then((images) => {
  //     //map?
  //     //get a random array of images. the ejs file with grid them out.
  //   })
  // }
}

module.exports = imagesController
