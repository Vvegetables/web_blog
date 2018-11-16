import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog'

export default class BlogList extends Component {
    static propTypes = {
        blogs : PropTypes.array
    }

    static defaultProps = {
        blogs : []
    }

    render(){
        return (
            <div>
                {
                    this.props.blogs.map((blog,i) => 
                    <Blog
                    title={blog.title}
                    desc={blog.desc}
                    likeNums={blog.likeNums}
                    commentNums={blog.commentNums}>
                    </Blog>)
                }
            </div>
        )
    }
}