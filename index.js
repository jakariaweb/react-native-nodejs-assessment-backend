const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const booksController = require('./controller/booksController')
app.use('/api/books', booksController)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
