import React from 'react'
import '../Assests/CSS/Logout.css';
import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Leftbar from '../components/Leftbar';
import Topbar from '../components/Topbar';

const Logout = () => {

  const user = useSelector(selectUser);

const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();
    
    dispatch(logout());
};
  return (
    <div className='logout'>
      <Leftbar/>
      <Topbar/>
      <h1 className="user_name">
        Welcome <span className='user_name'> {user.name} </span>
      </h1>
        <button className='logout_button' onClick={(e) => handleLogout(e)}>
          Logout
        </button>
    </div>
  )
}

export default Logout
