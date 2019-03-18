import React, {Component} from 'react'
import Comment from './comment'

class commentList extends Component {
    render () {
        return (
            <div>
                {this.props.comments.map((item, index) => {
                   return <Comment name={item.userName} 
                   handleButtonDelete={this.props.handleDelete}
                   index={index}
                   comment={item.userComment} key={index}/>
                })}
            </div>
        )
    }
}

export default commentList