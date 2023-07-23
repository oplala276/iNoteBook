// const connectToMongo = require('./db');
import Connection from './db.js';
import express from 'express';
import router from './routes/auth.js';
import route from './routes/notes.js'

Connection();

const app = express()
const port = 5000

app.use(express.json())
app.use('/auth', router)
app.use('/notes', route)

app.listen(port, () => {
    console.log(`iNoteBook app listening on port ${port}`)
})