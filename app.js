const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const homeRouter = require('./routes/Home/homeRouter')

app.use(cors())
app.use(morgan('tiny'))

app.use('/api/v1/home', homeRouter)

module.exports = app
