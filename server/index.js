// const connectToMongo = require('./db');
import Connection from './db.js';
// const express = require('express')
import express from 'express';
// import auth from './routes/auth.js'
import router from './routes/auth.js';

Connection();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use(express.json())
app.use('/auth', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})