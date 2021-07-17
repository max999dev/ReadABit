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
    // When the form is submitted, prevent its default behavior, get books update the books state
    // event.preventDefault()
    // this.setState.Books = API.getBooks;
    // Add code here to get all books from the database and save them to this.state.books
    API.getBooks()
    .then(res => this.setState({books: res.data, title: "", author: "", summary: "" }))
    .catch(err => console.log(err));
  };
  
  componentDidMount() {
    this.allBooks();
  }

  handleValues = (e) => {
    const {name,value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title.length > 0) {
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      summary: this.state.summary
    })
    .then(res => this.allBooks())
    .catch(err => console.log(err))
  }
  }
  deleteBook = (bookId) => {
    API.deleteBook(bookId)
    .then(res => this.allBooks())
    .catch(err => console.log(err))
  }
  render() {
    console.log(this.state.books);
    const {title, author, summary} = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card>
              <h1>What Books Should I Read?</h1>
            </Card>
            <form onSubmit={this.handleSubmit}>
              <Input name="title" placeholder="Title (required)" onChange={this.handleValues} value={title}/>
              <Input name="author" placeholder="Author (required)" onChange={this.handleValues} value={author}/>
              <TextArea name="summary" placeholder="Summary (Optional)" onChange={this.handleValues} value={summary}/>
              <FormBtn disabled={(!title && author)} type="submit">Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Card>
              <h1>Books On My List</h1>
            </Card>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book) => (
                  <ListItem key={book._id} >
                    <a href={"/books/" + book._id}>
                      {book.title} by <span>{book.author}</span>
                    </a>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)}/>
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
