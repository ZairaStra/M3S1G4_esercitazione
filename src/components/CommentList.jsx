import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => (
          <ListGroupItem key={comment._id}>{comment.comment}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
