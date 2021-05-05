const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema({

    label: { type: String, required: true },
    url: { type: String, required: true },
    tags: []
})

const Bookmark = model('Bookmark', bookmarkSchema)

module.exports = Bookmark;