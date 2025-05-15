import { Component } from "react";
import { Form, Button } from "react-bootstrap";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const yourReview = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin, // deve essere "elementId", non "id"
    };

    /*   try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(yourReview),
      });

      if (response.ok) {
        this.setState({ comment: "", rate: 1 });
        if (this.props.onCommentAdded) {
          this.props.onCommentAdded(); // callback dopo aggiunta
        }
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    } */
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Your review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your review"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRange">
          <Form.Label>Rating: {this.state.rate}</Form.Label>
          <Form.Range min={1} max={5} value={this.state.rate} onChange={(e) => this.setState({ rate: parseInt(e.target.value) })} />
        </Form.Group>
        <Button className="singleCardButton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
