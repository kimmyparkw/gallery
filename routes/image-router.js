const imageRouter = require('express').Router()

const imageController = require('../controller/images-controller')

imageRouter.get('/', imagesController.index)

imageRouter.get('/:id([0-9]+)', imagesController.show, (req, res) => {
  res.render('images/show', {
    image: res.locals.image
  })
})


module.exports = imageRouter
