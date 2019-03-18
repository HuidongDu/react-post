import React, {Component} from 'react'

const storeWrapper = (WrappedComponent) => {
    return class newComponents extends Component {
        constructor () {
            super()
            this.state = {
                data: []
            }
        }
        saveData = (data) => {
            localStorage.setItem('comments', JSON.stringify(data))
        }
        componentWillMount () {
            const comments = JSON.parse(localStorage.getItem('comments'))
            console.log(comments)
            if (comments) {
                this.setState({
                    data: [comments]
                })
            }
        }
        render () {
            return (
                <WrappedComponent comments={this.state.data} saveData={this.saveData} {...this.props}/>
            )
        }
    }
}

export default storeWrapper