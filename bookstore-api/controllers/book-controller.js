const Book = require('../models/Book')

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find()
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: 'All books fetched successfully',
        data: allBooks
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'No book found in database',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id
    const bookDetailsByID = await Book.findById(getCurrentBookID)
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: 'No book found in database',
      })
    }

    res.status(200).json({
      success: true,
      message: 'Book details fetched successfully',
      data: bookDetailsByID
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body
    const newlyCreatedBook = await Book.create(newBookFormData)
    if (newlyCreatedBook) {
      res.status(200).json({
        success: true,
        message: 'Book created successfully',
        data: newlyCreatedBook
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body
    const getCurrentBookID = req.params.id
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFormData, { new: true })
    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID)
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: deletedBook
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}

module.exports = {
  getAllBooks,
  addNewBook,
  getSingleBookById,
  updateBook,
  deleteBook
}