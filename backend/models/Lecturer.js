const mongoose = require('mongoose');

const LecturerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    password: String,
    city: String,
})

module.exports = mongoose.model('Lecturer', LecturerSchema);