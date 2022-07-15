import React, { useState } from 'react'
import styles from './Create.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
  const navigate = useNavigate()
  const [title,setTitle ] = useState('')
  const [body,setBody ] = useState('')
  const form = {title,body, user: "test", id: Math.floor(Math.random() * 5000)}
  // const form = {title,body, user_id: Math.floor(Math.random() * 5000), id: Math.floor(Math.random() * 5000)}
  const url ='https://gorest.co.in/public/v2/users/16/posts'
  const token = '0075442b0993bb34e2135fe5554d9ebc0017ff9a9131e94825f5afe3996e9cdd'
  
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  
  const submit = async (e)=>{
    e.preventDefault()
    await axios.post(url,form,config)    
    navigate('/')
  }

  return (
    <div className={styles.create}>

      <form onSubmit={submit}>
        <div className={styles['form-group']}>
          <h4>Title</h4>
          <input 
          type="text" 
          name='title'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          />
        </div>
        <div className={styles['form-group']}>
          <h4>Body</h4>
          <input 
          type="text" 
          name='body'
          onChange={(e)=>setBody(e.target.value)}
          value={body}
          />
        </div>

       {body && title && <button>Send</button> }
       {body && !title && <button disabled className={styles['btn-grey']}>Send</button> }
       {!body && title && <button disabled className={styles['btn-grey']}>Send</button> }
       {!body && !title && <button disabled className={styles['btn-grey']}>Send</button> }
      </form>

    </div>
  )
}

export default Create