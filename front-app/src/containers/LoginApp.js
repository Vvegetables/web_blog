import React,{Component} from 'react';
import LoginHeader from './LoginHeader';
import LoginBody from './LoginBody';
import LoginBottom from './LoginBottom';

export default class LoginApp extends Component{

    render(){
        return(
            <div className="login-frame">
                <LoginHeader/>
                <LoginBody/>
                <LoginBottom/>
            </div>
        )
    }
}