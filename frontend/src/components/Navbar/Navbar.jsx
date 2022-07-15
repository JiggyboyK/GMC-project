import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink  to='/create'>Create post</NavLink>
      <NavLink  to='/todo'>Create todo</NavLink>
      {/* <NavLink  to='/signup'>Sign up</NavLink> */}
      <NavLink  to='/login'>Login</NavLink>
    </div>
  )
}

export default Navbar