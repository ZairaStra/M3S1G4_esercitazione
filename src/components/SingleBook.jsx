/*
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";
*/

import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    isCardSelected: false,
  };

  cardToggle = () => {
    this.setState((prevState) => ({ isCardSelected: !prevState.isCardSelected }));
  };

  render() {
    return (
      <Card className={`singleCard ${this.state.isCardSelected ? "bg-danger shadow-danger rounded" : ""} `} onClick={this.cardToggle}>
        <Card.Img className="singleCardImg" variant="top" src={this.props.book.img} />
        <Card.Body className="text-center">
          <Card.Title className={`singleCardTitle overflow-hidden ${this.state.isCardSelected ? "text-white" : "text-danger-emphasis"}`}>
            {this.props.book.title}
          </Card.Title>
          {this.state.isCardSelected && <CommentArea asin={this.props.book.asin} />}
        </Card.Body>
      </Card>
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
