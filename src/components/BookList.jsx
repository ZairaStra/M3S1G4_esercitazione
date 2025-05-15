import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
    showBooks: false,
  };

  render() {
    return (
      <Container>
        <div className="mb-5">
          <h3 className="my-4 font-monospace text-center text-danger-emphasis">
            {this.props.books.length > 0 ? `Search by name in: ${this.props.books[0].category.toUpperCase()}` : "Search by name"}
          </h3>
          {/* <h3 className="my-4 font-monospace text-center">Search by name in the category: {this.props.books[0].category}</h3> */}
          <Row className="my-5 justify-content-center">
            <Col className="col-12 col-md-10">
              <Row className="justify-content-center gx-4 gy-4 mb-5">
                <Col className="col-11">
                  <Form.Control
                    type="text"
                    placeholder="Search your next book!"
                    value={this.state.searchQuery}
                    onChange={(e) => this.setState({ searchQuery: e.target.value, showBooks: e.target.value.length > 0 })}
                    aria-label="Search your book"
                    aria-describedby="Search"
                  />
                </Col>
                <Col className="col-1 d-flex justify-content-end">
                  <Button className="singleButton align-items-baseline" variant="danger" onClick={() => this.setState({ showBooks: !this.state.showBooks })}>
                    {this.state.showBooks ? (
                      <>
                        <i className="bi bi-chevron-up"> </i>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-chevron-down"></i>
                      </>
                    )}
                  </Button>
                </Col>
              </Row>{" "}
            </Col>
          </Row>
          {this.state.showBooks && (
            <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map((book) => (
                  <Col key={book.asin}>
                    <SingleBook book={book} />
                  </Col>
                ))}
            </Row>
          )}
        </div>
      </Container>
    );
  }
}

export default BookList;
