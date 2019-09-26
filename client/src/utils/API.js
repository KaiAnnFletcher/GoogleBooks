import axios from "axios";

//Now for the database

export default {
// Saves a book to the database
saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

// Deletes the book with the given id which will only be in the saved books page
deleteBook: function(id) {
  return axios.delete("/api/savedbooks/" + id)
},

// Gets the saved book with the given id
getBook: function(id) {
  return axios.get("/api/savedbooks/" + id);
},
};

