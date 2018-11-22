import React, { Component } from 'react';
import './static/css/style.css';
import {BlogRouter} from './containers/BlogRouters';

class App extends Component {
  
    render() {
        return (
            <div>
                <BlogRouter/>
            </div>
            
        );
    }
}

export default App;
