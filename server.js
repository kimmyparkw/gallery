const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

//require router
const galleryRouter = require('./routes/gallery-router')
const authRouter = require('./routes/auth-router')
const userRouter = require('./routes/user-router')
const imageRouter = require('./routes/image-router')


const app = express()
require('dotenv').config()

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    appName: 'curate-my-gallery',
  })
})

app.use('/galleries', galleryRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/images', imageRouter)

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})
