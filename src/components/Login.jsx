import React, {useState}from 'react'
import {Form,Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import '../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
function Login({onLoginSuccess}) {
=======
function Login() {
>>>>>>> ef9f390980d6e6d0cf8195c743e2e69297a0403e
    const [formData,setFormData]=useState({
        email:"",
        password:""
    });
    const navigate = useNavigate(); // Initialize useNavigate hook
    const handleonchange =(e)=>{
    
      const{name,value} = e.target
      setFormData({ ...formData,
        [name] : value}
      )
    }
    const handlesubmit=(event)=>{
        event.preventDefault()
       
        axios.post('http://localhost:5175/login/', formData)
            .then(response => {
                console.log('Login successful:', response.data);
<<<<<<< HEAD
                onLoginSuccess(response.data.role);
=======
>>>>>>> ef9f390980d6e6d0cf8195c743e2e69297a0403e
                if (response.data.status) {
                    alert('Login Successful');
                    if (response.data.role === 'admin') {
                        navigate('/admin-dashboard'); // Redirect to the admin dashboard
                    } else {
                        navigate('/user-dashboard'); // Redirect to the user dashboard
                    }
                } else {
                    alert('Invalid Username or Password');
                }
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
        setFormData({
            email:"",
            password:""
        });
    }
  return (
    <div className='login'>
         <h2>Login</h2>
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
