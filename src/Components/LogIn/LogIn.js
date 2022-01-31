import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
  const { signInUsingGoogle } = useAuth()
  
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassward] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/Home'

   

    const toggleLogIn = e =>{
      setIsLogIn(e.target.checked)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        
        setPassward(e.target.value)
        
        
    }
    
        
    
    const handlergistration = e =>{
        e.preventDefault();
        if (password.length<6){
            setError('Password must be at least 6 characters long.')
            return;
        }

            if(isLogIn){
              procesLogIn(auth, email, password)
          }
          else{
            createNewUser(auth, email, password)
          }
        }
        
      

        const procesLogIn = (auth, email, password)=>{
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            history.push(redirect_uri);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        }

        const createNewUser = (auth, email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          history.push(redirect_uri);
  })
}


const handleGoogleLogIn = () => {
  signInUsingGoogle()
      .then((result) => {
          history.push(redirect_uri);

      })
  
}     
    
   
    
    return (
        <div>
            <div className='w-50 mx-auto'>
              <h1>{isLogIn? 'Login' : 'Register'}</h1>
             <Form onSubmit={handlergistration}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={toggleLogIn} type="checkbox" label="Already Registered? " />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <div className='text-danger'>
      {error}
    </div><br/>
  <Button variant="primary" type="submit">
  {isLogIn? 'Login' : 'Register'}
  </Button>
  
  </Form.Group>
</Form>

<div>-------------Or------------</div>
                <Button onClick={handleGoogleLogIn} variant='outline-secondary' className='btn btn-secondary text-white'> Google Sign-in
                </Button>

            </div>
        </div>
    );
};

export default LogIn;