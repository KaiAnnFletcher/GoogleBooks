import axios from "axios";
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input,  SubmitBtn } from "../components/SearchForm";
//import key from "../utils/googlebooksearch/.env";
import SaveBtn from "../components/SaveBtn";

//Search input state using useState Hooks
//Let's Add the local state for search input using useState hooks

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const onInputChange = (e) =>{
        setSearchTerm(e.target.value);
    }

let API_URL = `https://www.googleapis.com/books/v1/volumes`;
let key = `AIzaSyBayHzmMZL6LRhz0XxbOrrx3t6Zj10p1RI`;

//Updating the books search results to state
const [books, setBooks] = useState({ items: [] });

const fetchBooks = async () => {
    //Ajax call to API using Axios
    const result = await axios.get(`${API_URL}?q=inauthor:${searchTerm}&key=${key}`);
    console.log(result);
    setBooks(result.data);
    // Books result
    console.log(result.data);
}

    const onSubmitHandler = (e) => {
        //Prevent browser refreshing after form submission
        e.preventDefault();
        //Call fetch books async function
        fetchBooks();
    }

//Now to return the UI for the books search results

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form onSubmit={onSubmitHandler}>
              <Input 
              type="search"
              name="author" 
              placeholder="Author (required)"
              value={searchTerm}
              onChange={onInputChange}
               />
              <SubmitBtn type="submit">Submit Author Name</SubmitBtn>
            </form>
          </Col>
        </Row>

        <Row>
        <Col size="md-12">
        <Jumbotron>
        <h1>Book List</h1>
        </Jumbotron>
        {books.items ? (
          <List>
            {books.items.map((book, index) => (
              <ListItem key={index}>
                <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.author}
                  </strong>
                  <h3>{book.volumeInfo.publishedDate}</h3>
                <SaveBtn />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>There are No Results to Display</h3>
        )}
        </Col>
        </Row>
        </Container>
    )
}

Search.defaultProps = {
    books: [],
  };

export default Search;