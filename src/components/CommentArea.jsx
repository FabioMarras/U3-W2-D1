import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { Card } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YzcyNThkM2Q0OTAwMTRjZmQ3ZjYiLCJpYXQiOjE2OTQ0MzMyNzIsImV4cCI6MTY5NTY0Mjg3Mn0.EcVMeokBcVLvIbLOMYJ8f48C6lWEGDz4odhaz9JrDu0",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        const filteredComments = comments.filter((comment) => comment.elementId === this.props.asin);
        this.setState({ comments: filteredComments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  //    componentDidMount () {
  //    this.fetchComments()}
  //  }

  componentDidUpdate = (prevProp, prevState) => {
    console.log("prevprops", prevProp);
    console.log("currentprop", this.props);
    if (prevProp.asin !== this.props.asin) {
      this.fetchComments();
    } else {
      console.log("id non variato");
    }
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {/* <AddComment asin={this.props.asin} /> */}
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
