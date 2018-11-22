import React,{Component} from 'react';

export default class Redirection extends Component{
    
    componentWillMount(){
        this.props.history.push({pathname:"/blog",query:{}})
    }

    render(){
        return(
            <div></div>
        )
    }
}
