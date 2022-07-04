const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    email: String,
    phone: String,
    name: String,
    password: String,
    group_size: Number,
    ages_start: Number,
    ages_end: Number,
    city: String,
    description: String,
    details: String,
    genders: String
})

module.exports = mongoose.model('Organization', OrganizationSchema);