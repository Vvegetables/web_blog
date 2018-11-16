import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class WordPreview extends Component {
    static propTypes = {
        index : PropTypes.number
    }

    constructor(){
        super()
        this.state = {
            preHost : "https://view.officeapps.live.com/op/view.aspx?src=",
            name : "http://localhost:9999/word/nginx_deploy.docx"
        }
    }

    render(){
        console.log(this.state.preHost + this.state.name);
        return (
            <div className="preview-div">
                {/* 需要公网ip地址 */}
                {/* <iframe src={this.state.preHost + this.state.name} width='100%' height='100%' frameBorder='1'></iframe> */}
                <a href="http://www.xdocin.com/xdoc?_func=to&amp;_format=html&amp;_cache=1&amp;_xdoc=http://47.97.1.237:8000/static/nginx_deploy.docx" target="_blank" rel="nofollow">XDOC</a>
            </div>
        )
    }

}


