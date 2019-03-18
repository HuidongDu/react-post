import React, {Component} from 'react'

class Comment extends Component {
    render () {
        return (
            <div className="comment-item">
                <span className="comment-name">{this.props.name}</span>
                <span className="comment-content">{this.props.comment}</span>
                <button onClick={() => this.props.handleButtonDelete(this.props.index)}>删除</button>
            </div>
        )
    }
}

export default Comment