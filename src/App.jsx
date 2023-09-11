import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    selectedAsin: "",
  };

  setAsin = (asin) => {
    console.log("setSelected in App.jsx");
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container>
        <MyNav />
        {/* <MyJumbotron /> */}
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={6}>
            <BookList books={fantasy} setAsin={this.setAsin} selectedAsin={this.selectedAsin} />
          </Col>
          <Col xs={6}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    );
  }
}

export default App;
