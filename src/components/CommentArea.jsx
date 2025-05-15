import { Component } from "react";
import { Container } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComments";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

class CommentArea extends Component {
  state = {
    comments: [],
    hasError: false,
    errorMessage: "",
  };

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments: comments });
      } else {
        throw new Error("Error loading comments");
      }
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <Container>
        <CommentList comments={this.state.comments} />
        <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
      </Container>
    );
  }
}

export default CommentArea;
