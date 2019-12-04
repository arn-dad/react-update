import React, { Component } from 'react';
import Form from './components/Form/Form'; 
import FormWithHook from './components/FormWithHook/FormWithHook';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
     data: { email: '', password: '', checkout: false },
     emailLabel: 'Email address',
     emailTextHelper: "We'll never share your email with anyone else.",
     userID: 125
    }

    this.formRef = React.createRef()
  }

  componentDidMount() {
    console.log('this.formRef', this.formRef);
    this.formRef.current.onSubmit('FROM APP')
  }

  render() {
    const {emailTextHelper} = this.state;
    return (
      <div>
        <h3>Class Form</h3>
        <Form ref={this.formRef} emailTextHelper={this.state.userName} />
        <h3>Functional Form</h3>
        <FormWithHook />        
      </div>
    );
  }
}

export default App;