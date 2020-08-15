const imageRouter = require('express').Router()

const imageController = require('../controller/images-controller')

imageRouter.get('/', imageController.index)

imageRouter.get('/:id([0-9]+)', imageController.show, (req, res) => {
  res.render('images/show', {
    image: res.locals.image
  })
})


module.exports = imageRouter
