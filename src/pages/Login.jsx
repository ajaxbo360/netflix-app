
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const { user, signIn } = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSignIn = async(e) => {
        setError("");
        e.preventDefault();
        try {
            await signIn(email, password)
             navigate("/");
        } catch (error) {
            console.log(error.message)
            setError(error.message);
       }
        

    }
  return (
      <>
          
           <div className='w-full h-screen'>
              
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/51357d78-1f79-4479-bdb3-40e42b7ff6a0/MA-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" className='hidden sm:block absolute w-full h-full object-cover' />
              <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
              <div className='fixed w-full z-50 px-4 py-24'>
                  <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                      <div className='max-w-[320px] mx-auto py-16'>
                          <h1 className='text-3xl font-bold'>Sign In</h1>
                          {error ? <p className='bg-red-500 text-white p-3'>{error}</p>: null}
                          <form onSubmit={handleSignIn} className='w-full flex flex-col py-4'>
                              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 rounded bg-gray-700 outline-none' type="email" placeholder='Email or Phone'  autoComplete='email'/>
                              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 rounded bg-gray-700 outline-none' type="password" placeholder='Password' autoComplete='current-password' />
                              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                              <div className='flex justify-between items-center text-sm text-gray-600'>
                                  <p ><input className='mr-2' type="checkbox" />Remember me</p>
                                  <p className='cursor-pointer'>Need Help?</p>
                              </div>
                              <p className='py-8'><span className='text-gray-600 mr-2'>New to Netflix?</span> <Link to="/Signup">Sign Up</Link></p>
                          </form>
                      </div>
                  </div>
              </div>
          </div>  
      </>
  )
}

export default Login