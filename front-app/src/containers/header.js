import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import FileUpload from '../components/FileUpload';

export default class HeaderComponent extends Component {
    static propTypes = {
        name : PropTypes.string
    };

    constructor(){
        super();
        this.state = {
            name : "博客"
        };
    };

    _searchBlog(event){
        if(event.which === 13){
            console.log(event.target.value)
            console.log(this.props.history.push({pathname:"/detail/1",query:{}}))
            // this.props.location = "/detail"
            
        };
    }

    render(){
        return (
            <div className="blog-header">
                <div className="blog-header-container-left">
                    <Link className="react-a" to="/"><h3>博客</h3></Link>
                </div>
                <div className="blog-header-container-middle">
                    <img src="/icon/blog-header.png" className="header-icon" alt="首页"/>
                    <input placeholder="搜索" type="text" onKeyDown={this._searchBlog.bind(this)}></input>
                </div>
                <div className="blog-header-container-right">
                    <img src="/icon/blog-header.png" className="header-icon" />
                    <Link className="react-a" to="/sign_in"><span>登录</span></Link>
                    <span>注册</span>
                    <Link className="react-a" to="/blog/edit"><span>写文章</span></Link>
                    <FileUpload/>
                </div>
            </div>
        )
    }


}