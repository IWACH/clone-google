
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Result = new Schema(
    {
        link: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

Result.index({'$**': 'text'});

module.exports = mongoose.model('results', Result)