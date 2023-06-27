const express = require('express')
const router = express.Router()

const booksService = require('../service/booksService')

router.get('/', (req, res) => {
  const books = booksService.getAllBooks()
  res.json(books)
})

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const book = booksService.getBookById(bookId)

  if (book) {
    res.json(book)
  } else {
    res.status(404).json({ message: 'Book not found' })
  }
})

module.exports = router
