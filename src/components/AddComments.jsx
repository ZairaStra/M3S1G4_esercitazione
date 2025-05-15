import { Component } from "react";
import { Form, Button } from "react-bootstrap";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        this.setState({ comment: "", rate: 1 });
        if (this.props.onCommentAdded) {
          this.props.onCommentAdded();
        }
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="my-2" controlId="formText">
          <Form.Label className="text-danger-emphasis">Your review</Form.Label>
          <Form.Control
            className="text-center"
            type="text"
            placeholder="Write here"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="formRange">
          <Form.Select aria-label="formRange" value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button className="singleCardButton" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
