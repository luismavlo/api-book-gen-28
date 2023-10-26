const express = require('express')
const cors = require('cors')
const { authorsRouter } = require('./routes/authors.route')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/authors', authorsRouter)
// app.use('/api/v1/books')

app.all('*', (req, res, next) => {
  return res.status(404).json({
    status: 'error',
    message: `Can't find ${req.originalUrl} on this server!`
  })
})

module.exports = app;