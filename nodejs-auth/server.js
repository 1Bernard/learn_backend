require('dotenv').config();

const express = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes')

connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})