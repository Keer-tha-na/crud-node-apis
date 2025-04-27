const express = require('express');
const app = express();
const productRoute = require('./routes/product.route');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//middleware
app.use(express.json());

app.get('/testApi', (req, res) => {
  res.send('Hello World hai')
})

//test api
app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
app.get('/', (req, res) => {
    res.send('Hello World hai');
})
//routes 
app.use('/api/products',productRoute);

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error',error))