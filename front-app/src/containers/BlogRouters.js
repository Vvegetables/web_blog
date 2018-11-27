import React from "react";
import BlogApp from "./BlogApp"
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import BlogDetail from "./BlogDetail";
import HeaderComponent from "./Header";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoginApp from "./LoginApp";
import Redirection from "./Redirection";
import RichTextEditor from "./RichTextEditor";
import RichTextEditor2 from "./RichTextEditor2";

const panelReducer = (state,action) => {
    if (!state) return {
      //初始化state
      blogs : [
        {title:"博客1",desc:"xxxxxxxx1",likeNums:5,commentNums:8,blogId:1},
        {title:"博客2",desc:"xxxxxxxx2",likeNums:5,commentNums:8,blogId:1},
        {title:"博客3",desc:"xxxxxxxx3",likeNums:5,commentNums:8,blogId:1},
        {title:"博客4",desc:"xxxxxxxx4",likeNums:5,commentNums:8,blogId:1}
      ]
    }
    switch(action.type) {
      case 'BLOG_LIST':
        console.log(1);
        return {...state,blogs:state.blogs.concat(action.blogs)}
      case 'CATEGORY_LIST':
        console.log(2);
        console.log(state)
        return {...state,blogs:action.blogs}
      default:
        return state
    }
  }
  
  const store = createStore(panelReducer)


  const BlogRouter = () => (
    <Router>
        <Provider store={store}>
            <div>
                
                {/* <Redirect exact from="/"  to="/blog"/> */}
                <Route path="/" exact component={Redirection}></Route>
                <Route path="/blog" component={HeaderComponent} />
                <Route path="/blog" exact component={BlogApp} />
                <Route path="/blog/edit" component={RichTextEditor2}></Route>
                <Route path="/detail/:blogId" component={BlogDetail} />
                <Route path="/sign_in" exact component={LoginRoute}/>
                
            </div>
        </Provider>
    </Router>
)

const LoginRoute = () => (
    <Router>
        <div>
            <Route path="/sign_in" exact component={LoginApp}/>
        </div>
    </Router>
)

export {BlogRouter}