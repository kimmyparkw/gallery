const express = require('express')
const galleryRouter = express.Router()

const galleryController = require('../controller/gallery-controller')

galleryRouter.get('/', galleryController.index)
galleryRouter.post('/', galleryController.create)

galleryRouter.get('/add', (req, res) => {
  res.render('galleries/add')
})

galleryRouter.get('/:id([0-9]+)', galleryController.show, (req, res) => {
  res.render('galleries/show', {
    gallery: res.locals.gallery
  })
})

galleryRouter.get('/:id([0-9]+)/edit', galleryController.show, (req, res) => {
  res.render('galleries/edit', {
    gallery: res.locals.gallery,
  })
})

galleryRouter.put('/:id', galleryController.update)

galleryRouter.delete('/:id', galleryController.delete)

module.exports = galleryRouter
