import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class HeaderComponent extends Component {
    static propTypes = {
        title : PropTypes.string,
        desc : PropTypes.string,
        commentNums : PropTypes.number,
        likeNums : PropTypes.number
    }

    // constructor(){
    //     super()
    // }

    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p className="blog-list-desc">{this.props.desc}</p>
                <div>
                    <span>{this.props.commentNums}</span><span>{this.props.likeNums}</span>
                </div>
            </div>
        )
    }


}