require('dotenv').config()
const express = require('express');
const connectDB = require('./database/db');
const bookRoutes = require('./routes/book-routes')

const app = express();

const PORT = process.env.PORT || 3000;

//connect to database
connectDB();

//middleware -> express.json()
app.use(express.json())

// routes here
app.use('/api/books', bookRoutes)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))