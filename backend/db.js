const mongoose = require('mongoose')

const getDb = async () => {
    let DB = null;

    try {
        DB = await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error);
    }

    return DB;
}

module.exports = getDb;