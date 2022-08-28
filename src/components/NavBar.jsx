import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function NavBar() {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate("/");
    } catch (error) {
        console.log(error.message)
      }
  }
  return (
    <div className='flex justify-between p-4 items-center w-full absolute z-[100]'>
      <Link to="/">

          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? <div>
        <Link to="/account">

              <button className='pr-4 text-white cursor-pointer'>Account</button>
        </Link>
        

              <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer '>Log Out</button>
        
        </div> : <div>
        <Link to="/login">

              <button className='pr-4 text-white cursor-pointer'>Sign In</button>
        </Link>
        <Link to="/signup">

              <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer '>Sign Up</button>
        </Link>
        </div>}
    </div>
  )
}

export default NavBar