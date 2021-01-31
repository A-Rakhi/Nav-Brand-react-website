import React, {useState} from "react";
import { Form, Col } from "react-bootstrap";

const Contact = () => {
 
    const [data,setData]=useState({
        fname: " ",
        lname: " ",
        email: " ",
        password: " ",
        textarea: " " ,
    });
    
    const InputEvent = (event) =>{
           const {name,value} = event.target;

           setData ((preVal) => {
               return{
                  ...preVal,
                  [name] : value,
               };
           });
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`I am ${data.fname} ${data.lname}, Email is ${data.email}, password is ${data.password} 
            and message is ${data.textarea}` );
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
                  name="fname"
                  value={data.fname }
                  onChange={InputEvent}
                  placeholder="First name" />
                </Col>

                <Col>
                  <Form.Label>Last Name</Form.Label>

                  <Form.Control 
                  name="lname"
                  value={data.lname }
                  onChange={InputEvent}
                  placeholder="Last name" />
                </Col>
              </Form.Row>
              <br />

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                name="email"
                value={data.email }
                onChange={InputEvent}
                
                placeholder="Enter email" />
                {/*  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>  */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                name="password"
                value={data.password }
                onChange={InputEvent}
                
                placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} 
                name="textarea"
                value={data.textarea }
                onChange={InputEvent}
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
