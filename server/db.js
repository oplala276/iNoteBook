// // import mongoose from 'mongoose';
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://oplala2020:q3BOK855holswJc8@ac-veculrv-shard-00-00.tlzwitv.mongodb.net:27017,ac-veculrv-shard-00-01.tlzwitv.mongodb.net:27017,ac-veculrv-shard-00-02.tlzwitv.mongodb.net:27017/?ssl=true&replicaSet=atlas-ubwzhf-shard-0&authSource=admin&retryWrites=true&w=majority'
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("connected succesfully")
//     })
// }

// module.exports = connectToMongo
import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://oplala2020:q3BOK855holswJc8@ac-veculrv-shard-00-00.tlzwitv.mongodb.net:27017,ac-veculrv-shard-00-01.tlzwitv.mongodb.net:27017,ac-veculrv-shard-00-02.tlzwitv.mongodb.net:27017/?ssl=true&replicaSet=atlas-ubwzhf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error);
    }
}

export default Connection;