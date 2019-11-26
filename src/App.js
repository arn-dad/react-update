import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { Badge } from 'react-bootstrap';
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
    this.state = { show: true, date: new Date(), update: false }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ update: true })
    // }, 2500);

    // setTimeout(() => {
    //   this.setState({show: false})
    // }, 2500)

    // setInterval(() => {
    //   this.setState({ date: new Date() })
    // }, 1000)
  }


  render() {
    const { date } = this.state;

    return (
      <div>
        <div className="clock">
          <Badge variant="info">{date.toLocaleTimeString()}</Badge>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;