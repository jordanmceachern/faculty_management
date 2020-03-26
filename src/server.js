require('dotenv').config()
const express = require('express')
const http = require('http')
const next = require('next')
const auth = require('./auth')

const dev = process.env.NODE_ENV !== 'production'
const Next = next({
  dev,
  dir: './src'
})
const handle = Next.getRequestHandler()

Next.prepare().then(() => {
  const app = express()

  app.use(auth)

  // handling everything else with Next.js
  app.get('*', handle)

  http.createServer(app).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
  })
})
