import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
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

  allBooks = () => {
    API.getBooks()
      .then((res) =>
        this.setState({ books: res.data, title: "", author: "", summary: "" })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.allBooks();
  }

  handleValues = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        summary: this.state.summary,
      })
      //.then((res) => this.allBooks())
        //.catch((err) => console.log(err));
    }
  };

  render() {
    console.log(this.state.books);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card>
              <h1>What Books Should I Read?</h1>
            </Card>
            <form>
              <Input
                name="title"
                placeholder="Title (required)"
                onChange={this.handleValues}
                value={this.state.title}
              />
              <Input
                name="author"
                placeholder="Author (required)"
                onChange={this.handleValues}
                value={this.state.author}
              />
              <TextArea
                name="summary"
                placeholder="Synopsis (Optional)"
                onChange={this.handleValues}
                value={this.state.summary}
              />
              <FormBtn onClick={this.handleSubmit}>Submit Book</FormBtn>
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
                    <DeleteBtn onClick={(event) => console.log(event.target)} />
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
