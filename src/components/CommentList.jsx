import { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => (
          <ListGroupItem key={comment._id}>
            {comment.comment} <Badge className="bg-danger">{comment.rate}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
