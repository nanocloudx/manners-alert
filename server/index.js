import Nuxt from 'nuxt'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'
import session from 'express-session'
import csrf from 'csurf'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.enable('trust proxy')
app.disable('x-powered-by')
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// SSL
app.use('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === 'http') {
    res.redirect('https://' + req.headers.host + req.url)
  } else {
    return next()
  }
})

// Import API Routes
app.use('/api', api)

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()

