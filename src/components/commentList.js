import React, {Component} from 'react'
import Comment from './comment'

class commentList extends Component {
    render () {
        return (
            <div>
                {this.props.comments.map((item, index) => {
                   return <Comment name={item.userName} comment={item.userComment} key={index}/>
                })}
            </div>
        )
    }
}

export default commentList