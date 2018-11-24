import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
    static propTypes = {
        title : PropTypes.string,
        desc : PropTypes.string,
        commentNums : PropTypes.number,
        likeNums : PropTypes.number,
        blogId : PropTypes.number,
    }

    // constructor(){
    //     super()
    // }

    render(){
        return (
            <div>
                <Link className="react-a" to={`/detail/${this.props.blogId}`}><h2>{this.props.title}</h2></Link>
                <p className="blog-list-desc">{this.props.desc}</p>
                <div>
                    <span>{this.props.commentNums}</span><span>{this.props.likeNums}</span>
                </div>
                <hr />
            </div>
        )
    }


}