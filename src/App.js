import React, { Component } from 'react';
import ClassComponent from './components'

import './App.css';

/** setState || useState
 * Simple counter class function
 * 
 * 
 * */ 

/** Toggle light
 *  style={{ height: "50px", width: "50px" }}
 *  https://icon.now.sh/highlight/fd0
 *  https://icon.now.sh/highlight/aaa
 *  
 * */ 

/**
 * componentDidMount || componentDidUpdate || useEffect
 * 
 *  useEffect [dependence array]
 *  no prorerty calls every time 
 *  empty array [] calls once
 *  with properties depend on property which will add in array
 *  
 * https://it-blog-posts.herokuapp.com/api/posts
 * */  

class App extends Component {
  render() {
    return (
      <div>
        <ClassComponent />
      </div>
    );
  }
}

export default App;