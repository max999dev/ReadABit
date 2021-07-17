import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  componentDidMount() {
    console.log(this.props.match.params.id)
    API.getBook(this.props.match.params.id)
    .then(res => {this.setState({book: res.data})})
    .catch(err => console.log(err))
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  }

  render() {
    console.log(this.props.match);
    const { book } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>
                {book.author} - {book.title}
              </h1>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Summary</h1>
              <p>
                {book.summary}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
