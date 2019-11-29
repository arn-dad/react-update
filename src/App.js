import React, { Component } from 'react';
import Cars from './components/Cars/Cars'
import Company from './components/Company/Company';
import { Badge, Button } from 'react-bootstrap';
import { companysData, cars } from './store/store';
import AppContext from './context/app-contex';
import './App.css';

/**
 * https://it-blog-posts.herokuapp.com/api/posts
 * https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/customers
* */  

/*
 comper props lodash isEqual
 Component vs PureComponent 
 shouldComponentUpdate vs useMemo
 useEffect vs componentDidMount componentDidUpdate componentWillUnmount
*/ 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      date     : new Date(),
      loggedIn : false 
    }
  }
  onChangeView = () => {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  login = () => {
    setTimeout(() => {
      this.setState({
        loggedIn: true
      })
    }, 1500)
  }

  render() {
    const { date, show, loggedIn } = this.state;
    console.log("#AR: render -> loggedIn", loggedIn);
    return (
      <div>
        <div className="clock">
          <Badge variant="info">{date.toLocaleTimeString()}</Badge>
        </div>
        <Button variant="info" onClick={this.login}>login</Button>
        <Button variant="secondary" onClick={this.onChangeView}>switch</Button>

        <AppContext.Provider value={{ loggedIn }}>
          {show && <Company data={companysData} />}
          {!show && <Cars data={cars} />}
        </AppContext.Provider> 
        
      </div>
    );
  }
}

export default App;