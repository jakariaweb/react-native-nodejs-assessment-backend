// booksService.js

const bookList = require('../entity/bookList')

const getAllBooks = () => {
  return bookList
}

const getBookById = (id) => {
  return bookList.find((book) => book.id === id)
}

module.exports = {
  getAllBooks,
  getBookById,
}
