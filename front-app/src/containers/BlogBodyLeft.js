import React,{Component} from 'react'
import PropTypes from 'prop-types'
import BlogList from './BlogList';
import LoadMoreButton from '../components/LoadMoreButton';


export default class BlogBodyLeft extends Component {
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
          {title:"博客1",desc:"xxxxxxxx1",likeNums:"5",commentNums:"8"},
          {title:"博客2",desc:"xxxxxxxx2",likeNums:"5",commentNums:"8"},
          {title:"博客3",desc:"xxxxxxxx3",likeNums:"5",commentNums:"8"},
          {title:"博客4",desc:"xxxxxxxx4",likeNums:"5",commentNums:"8"}
        ]
        this.setState({blogs:blogs})
    }

    _loadMoreBlogs(){
        return fetch('api/load_more_blog',{accpet: "application/json"}).then(
            res => {
                return res.json().then(
                    json => { // json is a list
                        let _blogs = this.state.blogs
                        _blogs = _blogs.concat(json)
                        this.setState({blogs: _blogs})
                    }
                )
            }
        )
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