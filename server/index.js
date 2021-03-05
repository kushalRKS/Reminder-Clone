const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

const CONNECTIONURL = process.env.api_url || 'mongodb://localhost:27017';

const  listRouter= require('./routes/route'); 
const PORT = process.env.port || 3000;


/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());


// CORS HEADERS MIDDLEWARE
app.use(cors());

app.use('/lists' ,listRouter);


mongoose
.connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) =>
        console.error('DB Connection Failed ⛔️⛔️⛔️', error.message)
    )


