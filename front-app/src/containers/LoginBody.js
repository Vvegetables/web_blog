import React,{Component} from 'react';


export default class LoginBody extends Component{
    
    render(){
        return (
            <div className="login-body">
                <div>
                    <input type="text" placeholder="请输入用户名" />
                </div>
                <div>
                    <input type="password" placeholder="请输入密码" />
                </div>
                <div>
                    <input type="checkbox" value="记住密码"/><span>记住我</span>
                </div>
                <div>
                    <input type="button" value="登录" />
                </div>
            </div>
        )
    }
}