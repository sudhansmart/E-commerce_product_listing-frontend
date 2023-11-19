import React, {useState}from 'react'
import {Container,Form,Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import '../styles/signup.css'
import { Link } from 'react-router-dom';
function SignUp() {
    const [formData,setFormData]=useState({
        name :"",
        email:"",
        password:""
    });
    const handleonchange =(e)=>{
    
      const{name,value} = e.target
      setFormData({ ...formData,
        [name] : value}
      )
    }
    const handlesubmit=(event)=>{
        event.preventDefault()
        console.log(formData)
        setFormData({
            name :"",
            email:"",
            password:""
        });
    }
  return (
   <div className='signup'>
      <h2 className='signup-title'>Registration Form</h2>
        <Form onSubmit={handlesubmit}>
            <FormGroup>
                <FormLabel>Name </FormLabel>
                <FormControl type='text'
                   name='name'
                   value={formData.name}
                   onChange={handleonchange}
                  required
                   />
            </FormGroup>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl type='email'
                   name='email'
                   value={formData.email}
                   onChange={handleonchange}
                   required
                   />
            </FormGroup>
            <FormGroup>
                <FormLabel>Password </FormLabel>
                <FormControl type='password'
                   name='password'
                   value={formData.password}
                   onChange={handleonchange}
                   required
                   />
            </FormGroup>
            <Button variant='primary' type='submit'>Register</Button>
        </Form>
        <p>Already have an Account? <Link to={'/login'}>Login</Link></p>
   </div>
  )
}

export default SignUp