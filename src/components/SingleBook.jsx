/*
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";
*/

import { Component } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    isCardSelected: false,
    showAlert: false,
  };

  cardToggle = () => {
    this.setState((prevState) => ({ isCardSelected: !prevState.isCardSelected }));
  };

  commentAdded = () => {
    this.setState({ isCardSelected: false, showAlert: true });
  };

  closeAlert = () => {
    this.setState({ showAlert: false });
  };

  render() {
    return (
      <>
        {this.state.showAlert && (
          <Alert variant="danger" onClose={this.closeAlert} dismissible>
            Feedback sent!
          </Alert>
        )}

        <Card className={`singleCard ${this.state.isCardSelected ? "bg-danger-subtle shadow-danger rounded" : ""} `} onClick={this.cardToggle}>
          <Card.Img className="singleCardImg" variant="top" src={this.props.book.img} />
          <Card.Body className="text-center">
            <Card.Title className="singleCardTitle overflow-hidden text-danger-emphasis">{this.props.book.title}</Card.Title>
            {this.state.isCardSelected && (
              <div onClick={(e) => e.stopPropagation()}>
                <CommentArea asin={this.props.book.asin} onCommentAdded={this.commentAdded} />
              </div>
            )}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;

/* const SingleBook = function (props) {
  return (
    <Card className="singleCard">
      <Card.Img className="singleCardImg" variant="top" src={props.book.img} />
      <Card.Body className="text-center">
        <Card.Title className="singleCardTitle overflow-hidden">{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
 */
