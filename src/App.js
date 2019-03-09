import React, { Component } from 'react';
import './App.css';
import CommentList from './components/commentList'
import CommentInput from './components/commentInput'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      comments: []
    }
  }
  handleComment = (e) => {
    console.log("输入了评论", e)
    this.state.comments.unshift(e)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="App">
          <CommentInput handleButtonClick={this.handleComment}/>
          <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
