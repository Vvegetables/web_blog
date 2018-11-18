import React from "react";
import BlogApp from "./BlogApp"
import {BrowserRouter as Router,Route} from "react-router-dom";
import BlogDetail from "./BlogDetail";

const BlogRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={BlogApp} />
            <Route path="/detail/:blogId" component={BlogDetail} />
        </div>
    </Router>
)

export default BlogRouter