const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Database connected');
    }
    catch (error) {
        console.error(error.message)
    }
}

module.exports = connectDb;