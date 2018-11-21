import React from "react";
import BlogApp from "./BlogApp"
import {BrowserRouter as Router,Route} from "react-router-dom";
import BlogDetail from "./BlogDetail";
import HeaderComponent from "./Header";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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
                <Route path="/" component={HeaderComponent} />
                <Route path="/" exact component={BlogApp} />
                <Route path="/detail/:blogId" component={BlogDetail} />
            </div>
        </Provider>
    </Router>
)

export default BlogRouter