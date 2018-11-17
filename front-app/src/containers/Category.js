import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class Category extends Component {
    static propTypes = {
        title : PropTypes.string,
        blogNums : PropTypes.string
    }

    // constructor(){
    //     super()
    // }

    render(){
        return (
            <div>
                <span>{this.props.title}</span><span>{"(" + this.props.blogNums + ")"}</span>
                <hr />
            </div>
        )
    }


}