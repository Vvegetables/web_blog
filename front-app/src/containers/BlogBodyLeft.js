import React,{Component} from 'react'
import PropTypes from 'prop-types'
import BlogList from './BlogList';
import LoadMoreButton from '../components/LoadMoreButton';

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreBlogs : () => {
            fetch('/api/load_more_blog',{accpet: "application/json"}).then(
                res => {
                    console.log("category")
                    return res.json().then(
                        json => { // json is a list
                            console.log("blogs:",json)
                            dispatch({type : 'BLOG_LIST',blogs:json})
                        }
                    )
                }
            )
            
        }
    }
}

class BlogBodyLeft extends Component {
    // static propTypes = {
    //     src : PropTypes.string
    // }

    // static defaultProps = {
    //     src : ""
    // }
    constructor(){
        super()
        this.state = {
          users : [],
          blogs : []
        }
    }

    componentWillMount(){
        const blogs = [
          {title:"博客1",desc:"xxxxxxxx1",likeNums:5,commentNums:8,blogId:1},
          {title:"博客2",desc:"xxxxxxxx2",likeNums:5,commentNums:8,blogId:1},
          {title:"博客3",desc:"xxxxxxxx3",likeNums:5,commentNums:8,blogId:1},
          {title:"博客4",desc:"xxxxxxxx4",likeNums:5,commentNums:8,blogId:1}
        ]
        this.setState({blogs:blogs})
    }

    _loadMoreBlogs(){
        if (this.props.loadMoreBlogs){
            this.props.loadMoreBlogs()
        }
        
    }    

    render(){
        return (
            <div className="blog-body-left">
                <BlogList blogs={this.state.blogs}></BlogList>
                <LoadMoreButton click={this._loadMoreBlogs.bind(this)}></LoadMoreButton>
            </div>
        )
    }

    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogBodyLeft)