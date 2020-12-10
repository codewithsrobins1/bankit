const express = require ('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

//BodyParser
app.use(express.json());

//DB Config
const db = config.get('mongoURI');

//PORT
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Use Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));