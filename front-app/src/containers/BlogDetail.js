import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class BlogDetail extends Component {
    static propTypes = {
        title : PropTypes.string,
        desc : PropTypes.string,
        commentNums : PropTypes.number,
        likeNums : PropTypes.number,
        blogId : PropTypes.number,
    }

    componentWillMount(){
        // this.props的使用
        console.log("blogId:",this.props.match.params.blogId)
        this._fetchBlogDetail()
    }

    constructor(){
        super()
        this.state = {
            title : "",
            desc : "",
            commentNums : 0,
            likeNums : 0,
            blogId : 0,
        }
    }


    _fetchBlogDetail(){
        fetch('/api/blog_detail',{accpet: "application/json"})
            .then((response) => {
                return response.json();
            })
            .then((resJson) => {
                this.setState({
                    title : resJson.title,
                    desc : resJson.desc,
                    commentNums : resJson.commentNums,
                    likeNums : resJson.likeNums,
                    blogId : resJson.blogId,
                })
            })
    }

    render(){
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <p className="blog-list-desc">{this.state.desc}</p>
                <div>
                    <span>{this.state.commentNums}</span>
                    <span>{this.state.likeNums}</span>
                    <span>{this.state.readNums}</span>
                </div>
                <hr />
            </div>
            

        )
    }


}