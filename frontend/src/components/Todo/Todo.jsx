import React, { useState, useEffect } from 'react'
import styles from './Todo.module.css';
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Todo = () => {
  // const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const form = {user_id: Math.floor(Math.random() * 5000), title, date}
    const url ='https://gorest.co.in/public/v2/users/16/todos'
    const token = '0075442b0993bb34e2135fe5554d9ebc0017ff9a9131e94825f5afe3996e9cdd'
    const [data, setData] = useState(null)

    const config = {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
  


    const submit = async (e)=>{
      e.preventDefault()
      await axios.post(url,form,config)    
      getData()

    }
  


    const getData = async () => {
      try {
        const res = await axios.get(url,config)
        setData(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getData()

    }, [])


  return (
    <div className={styles.todo}>
      <form onSubmit={submit} >
        <div className={styles['form-group']}>
          <h4>Todo List:</h4>
          <input 
          type="text"
          name='title'
          placeholder='Add an item...'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}

          />

          <input 
          type="date"
          name='date'
          onChange={(e)=>setDate(e.target.value)}
          value= {date}


          />
          <button >Add</button>
          </div>
          
      </form>

      {data && data.map((value, idx) => (
        <div key={idx}>
          <p>{value.title}</p>
          <p>{value.date}</p>
        </div>
      ))}

    </div>
  )
}

export default Todo


