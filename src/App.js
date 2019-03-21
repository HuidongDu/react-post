import React, { Component } from 'react';
import './App.css';
import CommentList from './components/commentList'
import CommentInput from './components/commentInput'
import storeWrapper from './components/highOrder';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      comments: props.comments
    }
    console.log(this.state)
  }
  handleComment = (e) => {
    this.state.comments.unshift(e)
    this.setState({
      comments: this.state.comments
    })
    this.props.saveData(e)
  }
  handleDelete = (index, e) => {
    this.state.comments.splice(index, 1)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="App">
          <CommentInput handleButtonClick={this.handleComment}/>
          <CommentList comments={this.state.comments} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

const wrappedApp = storeWrapper(App)
export default wrappedApp;
