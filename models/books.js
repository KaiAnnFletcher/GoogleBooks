const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  selfLink: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;