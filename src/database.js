const express = require('express')
const router = express.Router()

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) return next()
  res.send(401)
}

router.post('/api/faculty/create', ensureAuthenticated, (req, res) => {
  // const { message } = req.body
  // const newThought = {
  //   _id: new Date().getTime(),
  //   message,
  //   author: req.user.displayName
  // }
  // console.log(newThought)
  res.send({ message: 'Submitted' })
})

router.get('/api/faculty/read', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.post('/api/faculty/update', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.post('/api/faculty/delete', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.post('/api/semester-builder/create', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.get('/api/semester-builder/read', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.post('/api/semester-builder/update', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

router.post('/api/semester-builder/delete', ensureAuthenticated, (req, res) => {
  res.send({ message: 'Submitted' })
})

module.exports = router
