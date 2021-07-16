import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    summary: "",
  };

  allBooks = (event) => {
    // When the form is submitted, prevent its default behavior, get books update the books state

    // Add code here to get all books from the database and save them to this.state.books

    // API ...
  };
  
  componentDidMount() {
    this.allBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card>
              <h1>What Books Should I Read?</h1>
            </Card>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Card>
              <h1>Books On My List</h1>
            </Card>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book) => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      {book.title} by <span>{book.author}</span>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
