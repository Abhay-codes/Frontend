import React from 'react';
import { Link } from 'react-router-dom';


const SignUpForm = ({name, email, password, result, signupUser, setName, setEmail, setPassword}) => {

    return (
        <>
            <h1 className='result'>{result}</h1>
            <form className='signup form' onSubmit={signupUser}>
                <h1>Sign Up Form</h1>
                <label htmlFor="name" className='nameLabel' >Name : </label> <br />
                <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='inputFields' /> <br />
                <label htmlFor="email" className='emailLabel'  >Email : </label> <br />
                <input type="email" name="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputFields' /> <br />
                <label htmlFor="password" className='passwordLabel' >Password : </label> <br />
                <input type="password" name="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputFields' /> <br />
                <button className='btn' type='submit'>SignUp</button> <br />
                 <Link to='/' className='redirectLink'> Already Registered? Login</Link> 
            </form>
        </>
    )
}

export default SignUpForm;
