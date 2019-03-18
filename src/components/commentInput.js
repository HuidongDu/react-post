import React, {Component} from 'react'

class commentInput extends Component {
    constructor () {
        super()
        this.state = {
            userName: '',
            userComment: ''
        }
    }
    handleInput = (name, e) => {
        this.setState({
            [name] : e.target.value
        })
    }
    handlePost = (e) => {
        const {userComment, userName} = this.state
        const comment = {
            userName,
            userComment
        }
        this.props.handleButtonClick(comment)
    }
    componentDidMount () {
        this.input.focus()
    }
    render () {
        return (
            <div className="comment-input">
                <div className="input-item">
                    <span>用户名：</span>
                    <input type="text" value={this.state.userName} className="name-input" onChange={(e) => {this.handleInput("userName", e)}}/>
                </div>
                <div className="input-item">
                    <span>评论内容：</span>
                    <textarea type="text" className="content-input" 
                    ref={(input) => this.input = input}
                    onChange={(e) => {this.handleInput("userComment", e)}} 
                    value={this.state.userComment}/>
                </div>
                <button className="comment-post" onClick={this.handlePost}>发布</button>
            </div>
        )
    }
}

export default commentInput