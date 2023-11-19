import React, {useState}from 'react'
import {Form,Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import '../styles/login.css'

function Login() {
    const [formData,setFormData]=useState({
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
            email:"",
            password:""
        });
    }
  return (
    <div className='login'>
         <h2>Add Products</h2>
    <Form onSubmit={handlesubmit}>
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
        <Button variant='primary' type='submit'>Login</Button>
    </Form>
</div>
  )
}

export default Login