import axios from 'axios';
import React, { useState } from 'react'
import styles from './Login.module.css'
// import axios from 'axios';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();



    const handleSubmit = async (e) => {
        // if there's a user show this message
      
        e.preventDefault();

        const user = {username, password};

       const response = await axios.post('http://localhost:3000/login', user)
     
        .then (res => {
            console.log (res)
        })
        .catch(err => {
            console.log(err)
        })

    };

  return (
    <div className= {styles.login}>
    <form onSubmit={handleSubmit}>
        <h4>Login</h4>

        <div className={styles['form-group']}>

        <label>Email</label>
        <input 
        type='email' 
        className='form-control' 
        onChange={(e) => setUsername(e.target.value)}
        placeholder='enter an email'/> <br />

        <label>Password</label>
        <input 
         type='password'
         className='form-control' 
         onChange={(e) =>setPassword(e.target.value)}
         placeholder='Password'/>

        <button type= "submit">Login</button>

        </div>
     </form>

     <p>
          Need an Account? <br />
          <span className='line'>
          <a href="/signup">Sign up</a>
          </span>
    </p>
     </div>

  )
}

export default Login