const Image = require('../models/Image')

const imageController = {

  index(req, res, next) {
    Image.getAll()
      .then((images) => {
        randomImages = []
        if (randomImages.length < 10) {
          for (let i = 0; i <= 10; i++) {
            randomImage = images[Math.floor(Math.random() * 40)]
            randomImages.push(randomImage)
          }
        }
        console.log(randomImages);
        res.render('images/index', {
          randomImages,
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

}

module.exports = imageController
