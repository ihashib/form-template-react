import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormTemplate() {
  let [user, setUser] = useState({email : '', password : ''});

  const onSubmitHandler = (e) =>{
    console.log(user);
  }
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.email]: e.target.password });
  };


  return (
    <div className="main">
        <h1 className="title">Form Template</h1>
        <div className="form">
          <div className="form-main">
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail" onChange={onChangeHandler}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={user.name} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword" onChange={onChangeHandler}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={user.password} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div >
  )
}
