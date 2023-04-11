// import React from "react";


// function Contact() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Contact;


// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


const Contact = () => {
  const [userFormData, setUserFormData] = useState({ name: '', email: '', message: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setUserFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    {/* name */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          {/* email */}
          <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        {/* message */}
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='message'>Message</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your message'
            name='message'
            onChange={handleInputChange}
            value={userFormData.message}
            required
          />

          <Form.Control.Feedback type='invalid'>Message is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.name && userFormData.email && userFormData.message)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Contact;
