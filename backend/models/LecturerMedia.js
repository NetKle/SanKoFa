const mongoose = require('mongoose');

const LecturerMediaSchema = new mongoose.Schema({
    lecturer_id: mongoose.Schema.Types.ObjectId(),
    url: String,
    media_type: {
        type: String,
        enum: ['video', 'photo']
    }
})

module.exports = mongoose.model('LecturerMedia', LecturerMediaSchema, {timestamps: true});