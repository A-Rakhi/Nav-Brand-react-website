import React, {useState} from "react";
import { Form, Col } from "react-bootstrap";

const Contact = () => {
 
  const [fname, setFname] = useState(" ")
  const [lname, setLname] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPass] = useState(" ")
  const [textarea, setTextarea] = useState(" ")

  
  function isEmail(val) {
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
        return 'Invalid Email';
    }
}
    
    const formSubmit = () =>{
        isEmail(email);
        alert(`I am ${fname} ${lname}, Email is ${email}, password is ${password} 
            and message is ${textarea}` );
    };


  return (
    <>
      <div className="my-4">
        <h2 className="text-center text-warning contact-h2">
          <span style={{ color: "#ba48c7" ,}}>Contact</span> US
        </h2>
      </div>

      <div className="container contact-sec">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
           
            <Form onSubmit={formSubmit} className="form">
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>

                  <Form.Control 
                  type="text"
                  value={fname }
                  onChange={event => (setFname(event.target.value))}
                  placeholder="First name" />
                </Col>

                <Col>
                  <Form.Label>Last Name</Form.Label>

                  <Form.Control 
                  type="text"
                  value={lname }
                  onChange={event => (setLname(event.target.value))}
                  placeholder="Last name" />
                </Col>
              </Form.Row>
              <br />

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                value={email }
                onChange={event => (setEmail(event.target.value))}
                placeholder="Enter email" />
                {/*  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>  */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password" 
                value={password }
                onChange={event => (setPass(event.target.value))}
                placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} 
                name="textarea"
                value={textarea }
                onChange={event => (setTextarea(event.target.value))}
                /> </Form.Group>

              <button type="submit" className="btn btn-outline-success text-dark contact-btn">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
