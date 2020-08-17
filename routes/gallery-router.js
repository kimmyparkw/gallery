const express = require('express')
const galleryRouter = express.Router()

const galleryController = require('../controller/gallery-controller')

galleryRouter.get('/', galleryController.index)
galleryRouter.post('/', authHelpers.loginRequired, galleryController.create)
//added loginRequired in line 7 , 9, 19, 25, and 27
galleryRouter.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('galleries/add')
})

galleryRouter.get('/:id([0-9]+)', galleryController.show, (req, res) => {
  res.render('galleries/show', {
    gallery: res.locals.gallery
  })
})

galleryRouter.get('/:id([0-9]+)/edit', authHelpers.loginRequired, galleryController.show, (req, res) => {
  res.render('galleries/edit', {
    gallery: res.locals.gallery,
  })
})

galleryRouter.put('/:id', authHelpers.loginRequired, galleryController.update)

galleryRouter.delete('/:id', authHelpers.loginRequired, galleryController.delete)

module.exports = galleryRouter
