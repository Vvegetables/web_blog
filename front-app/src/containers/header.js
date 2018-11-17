import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class HeaderComponent extends Component {
    static propTypes = {
        name : PropTypes.string
    }

    constructor(){
        super()
        this.state = {
            name : "博客"
        }
    }

    render(){
        return (
            <div className="blog-header">
                <div className="blog-header-container-left">
                    <h3>博客</h3>
                </div>
                <div className="blog-header-container-middle">
                    <img src="./icon/blog-header.png" className="header-icon" alt="首页"/>
                    <input placeholder="搜索" type="text"></input>
                </div>
                <div className="blog-header-container-right">
                    <img src="./icon/blog-header.png" className="header-icon" />
                    <span>登录</span><span>注册</span><span>写文章</span>
                </div>
            </div>
        )
    }


}