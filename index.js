const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.PORT}/${process.env.DBPORT}`, { userNewUrlParser: true }, () => {
  console.log('DB connected.')
});

// Routes
const authRoutes = require('./routes/auth');

app.get('/', async (req, res) => {
  res.status(200).send('Hello World!');
})

app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running: http://localhost:${process.env.PORT}`);
});