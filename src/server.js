require('dotenv').config()
const express = require('express')
const session = require('express-session')
const http = require('http')
const next = require('next')
const auth = require('./auth')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const uid = require('uid-safe')

const dev = process.env.NODE_ENV !== 'production'
const Next = next({
  dev,
  dir: './src'
})
const handle = Next.getRequestHandler()

Next.prepare().then(() => {
  const app = express()

  // Add session management to Express
  const sessionConfig = {
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000 * 30 // 30 days expiration
    },
    resave: false,
    saveUninitialized: true
  }
  app.use(session(sessionConfig))

  // Configure Auth0Strategy
  const auth0Strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile)
    }
  )

  // Configure Passport
  passport.use(auth0Strategy)
  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((user, done) => done(null, user))

  // Passport routes
  app.use(passport.initialize())
  app.use(passport.session())

  // Auth routes
  app.use(auth)

  // Restrict access to specified routes
  const restrictAccess = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/login')
    next()
  }

  app.use('/dashboard', restrictAccess)
  app.use('/faculty', restrictAccess)
  app.use('/semester-builder', restrictAccess)

  // handling all other routes with Next.js
  app.get('*', handle)

  http.createServer(app).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
  })
})
