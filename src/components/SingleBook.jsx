import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    BookTitle: null,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.setAsin(this.props.book.asin);
          }}
          style={{ border: this.props.book.asin === this.props.asin ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
