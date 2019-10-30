import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";
//import { List, ListItem } from "../components/List";
//import { Input,  SubmitBtn } from "../components/SearchForm";
//import key from "../utils/googlebooksearch/.env";
//import SaveBtn from "../components/SaveBtn";

export default function Save(props) {
    const [books, setBooks] = useState(props ? true : false);

    API.getBook();
    const response = fetch("/api/savedbooks/");
    setBooks(response);


useEffect(() => {
    API.getBook(props.id);
}, [props.id]);

if (!books) {
    return "loading...";
}

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
        <Col size="md-12">
        
        {books ? (
          <SavedResults />
        ) : (
          <h3>There are No Results to Display</h3>
        )}
        </Col>
        </Row>
        </Container>
    )
        }