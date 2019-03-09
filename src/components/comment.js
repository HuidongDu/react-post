import React, {Component} from 'react'

class Comment extends Component {
    render () {
        return (
            <div className="comment-item">
                <span className="comment-name">{this.props.name}</span>
                <span className="comment-content">{this.props.comment}</span>
            </div>
        )
    }
}

export default Comment