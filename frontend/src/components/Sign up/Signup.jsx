import React from 'react'
import styles from './Signup.module.css'
 

function Signup() { 
   
   const handleSubmit = e => {
    e.preventDefault();
    const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password_confirm: this.confirmPassword
    }
        console.log(data);
    } 



  return (
    <div className={styles.signup}>
        <form onSubmit={handleSubmit}>
            <h4>Sign Up</h4>

            <div className={styles['form-group']}>
            <label>First Name</label>
            <input type='text' className='form-control' 
            onChange={e => this.firstName = e.target.value}
            placeholder='First Name'/>

            

            <label>Last Name</label>
            <input type='text' className='form-control' 
            onChange={e => this.lastName = e.target.value}
            placeholder='Last Name'/>

            <label>Email</label>
            <input type='email' 
            className='form-control' 
            onChange={e => this.email= e.target.value}
            placeholder='Email'/>

            <label>Password</label>
            <input type='password'
             className='form-control' 
             onChange={e => this.password = e.target.value}
            placeholder='Password'/>

            <label>Confirm Password</label>
            <input type='password' 
            className='form-control' 
            onChange={e => this.confirmPassword = e.target.value}
            placeholder='Confirm Password'/>

            <button>Sign up</button>
            
            

            </div>
        </form>

    </div>
  )
}

export default Signup