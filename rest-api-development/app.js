const express = require('express');
const app = express();

// middleware
app.use(express.json());

let books = [
  {
    id: "1",
    title: "Book One",
    author: 'John Doe'
  },
  {
    id: "2",
    title: "Book Two",
    author: "Jane Doe"
  },
  {
    id: "3",
    title: "Book Three",
    author: "Steve Smith"
  }
]

//intro route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our bookstore api'
  });
});

//get all books
app.get('/books', (req, res) => {
  res.json(books);
});

//get single book
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }
  res.json(book);
});

//add new book
app.post('/add', (req, res) => {
  const newBook = {
    id: (Math.floor(Math.random()* 1000)).toString(),
    title: `Book ${Math.floor(Math.random() * 1000) }`,
    author: `Author ${Math.floor(Math.random() * 1000) }`
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: 'Book added successfully'
  });
})

//upudate a book
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const findCurrentbook = books.find(b => b.id === id);

  if (!findCurrentbook) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }
  findCurrentbook.title = req.body.title || findCurrentbook.title;
  findCurrentbook.author = req.body.author || findCurrentbook.author;
  res.status(200).json({
    data: findCurrentbook,
    message: `Book with id ${id} updated successfully`
  });
})

//delete a book
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const findIndexOfCurrentbook = books.findIndex(b => b.id === id);

  if (findIndexOfCurrentbook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentbook, 1);
    return res.status(200).json({
      data: deletedBook,
      message: `Book with id ${id} deleted successfully`
    });
  } else {
    return res.status(404).json({
      message: 'Book not found'
    });
  }
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});