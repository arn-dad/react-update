import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



const FormInputs = (props) => {
  const [data, setData] = useState({ email: '', password: '', checkout: false })
  const inputRef = useRef()
  const onSubmit = () => {
    console.log(data)
  }
  
  const onInputChange = (e) => {
    const { target: { name, value, type }} = e
    setData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? !prevState.checkout :  value
    }))
  }
  
    console.log("#AR: FormInputs -> inputRef", inputRef);
    const { email, password, checkout } = data;
    const { userID } = props;
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <Form>
              <Form.Group controlId="cl-id">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={inputRef} name="email" value={email} onChange={onInputChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="fl-id">
                <Form.Label>Password for user ID` {userID}</Form.Label>
                <Form.Control name='password' value={password} onChange={onInputChange} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="fl-p-id">
                <Form.Check name='checkout' onChange={onInputChange} checked={checkout} type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={onSubmit}>
                Submit
              </Button>
                </Form>
              </Col>
            </Row>
        </Container>
        
      </div>
    );
}

FormInputs.defaultProps = {
  userID: '--',
  onSubmit: () => {}
}

export default FormInputs;