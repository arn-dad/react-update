import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class FormInputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: { email: '', password: '', checkout: false }
    }
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.value = 'asd@email.com'
    
  }


  onSubmit = (str) => {
  }

  onInputChange = (e) => {
    const { target: { name, value, type }} = e
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: type === 'checkbox' ? !prevState.data.checkout :  value
      }
    }))
  }

  render() {
    const { email, password, checkout } = this.state.data;
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" ref={this.inputRef} value={email} onChange={this.onInputChange} type="email" placeholder="Enter email" />
                <Form.Text  className="text-muted" id='emailID'>
                  {`label - ${this.props.emailTextHelper}`}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password for user ID 125</Form.Label>
                <Form.Control name='password' value={password} onChange={this.onInputChange} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check name='checkout'  onChange={this.onInputChange} checked={checkout} type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={this.onSubmit}>
                Submit
              </Button>
                </Form>
              </Col>
            </Row>
        </Container>
        
      </div>
    );
  }
}

FormInputs.defaultProps = {
  emailTextHelper: '--',
  onSubmit: () => {}
}

export default FormInputs;