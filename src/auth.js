const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

router.use(bodyParser.json())

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var crypto = require('crypto')

router.use(passport.initialize())
router.use(passport.session())

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err) }
      // If no user register a new one
      if (!user) {
        console.log('Registering new user')
        var today = new Date()
        var createdDate = today.getTime()

        var newPass = crypto.hashPassword(password, createdDate)

        user = User.build({
          email: username,
          password: newPass,
          createdDate
        })

        user.save().success(savedUser => {
          console.log('Saved user successfully: %j', savedUser)
          return done(null, savedUser)
        }).error(error => {
          console.error(error)
          return done(null, false, { message: 'Something went wrong in registration' })
        })
      }

      // If signups are disallowed
      // if (!user) {
      //   return done(null, false, { message: 'Incorrect username.' })
      // }
      // if (!crypto.validPassword(password, user)) {
      //   return done(null, false, { message: 'Incorrect password' })
      // }

      return done(null, user)
    })
  }
))

router.post('/auth/login', passport.authenticate('local'), (req, res) => {
  console.log('Logging in as: ' + req.user)
  res.status(200).json(req.user)
})

module.exports = router
