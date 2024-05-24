import './CSS/LoginSignUp.css'
import React, { useState } from 'react'

const LoginSignUp = () => {

    const [state, setState] = useState('Login');
    const [formData, setformData] = useState({
        username:"",
        password:"",
        email: ''
    });

    const changeHandler = (e) => {
        setformData({...formData, [e.target.name]: e.target.value});
    }

    const login = async () => {
        console.log('Login Function Executed',formData);
        let responseData;
        await fetch('http://localhost:8080/login',{
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else {
            alert(responseData.errors);
        }
    }
    const signup = async () => {
        console.log('Signup Function Executed',formData);
        let responseData;
        await fetch('http://localhost:8080/signup',{
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else {
            alert(responseData.errors);
        }
    }


    return (
        <div className='loginSignUp'>
            <div className="loginSignUp-container">
                <h1>{state}</h1>
                <div className="loginSignUp-fields">
                    {state === 'Sign Up' ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />

                </div>
                <button onClick={() => {state==='Login'?login():signup()}}>Submit</button>
                {state === 'Sign Up' ? <p className='loginSignUp-login'>Already have an account? <span onClick={() => {setState('Login')}}>Login Here</span></p> : <p className='loginSignUp-login'>Create an account? <span onClick={()=> {setState('Sign Up')}}>Click Here</span></p>}
                <div className="loginSignUp-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing I agree to the term of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp