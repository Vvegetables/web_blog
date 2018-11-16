import React,{Component} from 'react'
import PropTypes from 'prop-types'


export default class LoadMoreButton extends Component {
    static propTypes = {
        src : PropTypes.string
    }

    static defaultProps = {
        src : ""
    }

    render(){
        return (
            <button onClick={this.props.click.bind(this)}>点击加载更多</button>
        )
    }
    
}