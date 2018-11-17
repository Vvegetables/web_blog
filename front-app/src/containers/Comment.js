import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
    static propTypes = {
        // username : PropTypes.string,
        // userImage : PropTypes.string,
        // content : PropTypes.string,
        // time : PropTypes.string,
        // floor: PropTypes.number,
        // response : PropTypes.array
        comment : PropTypes.object
    }

    // constructor(){
    //     super()
    // }

    render(){
        return (
            <div>
                <div className="author">
                    <img src={this.props.comment.userImage} alt="头像" />
                    <div className="user-info">
                        <p>{this.props.comment.username}</p>
                        <div>
                            <span>{this.props.comment.floor}</span>
                            <span>{this.props.comment.time}</span>
                        </div>
                    </div>
                    <p>{this.props.comment.content}</p>
                    <div className="tool-group">
                        <span className="tool-like">{this.props.comment.likeNums}</span>
                        <span className="tool-comment">回复</span>
                    </div>
                </div>
                <hr />
            </div>
        )
    }


}