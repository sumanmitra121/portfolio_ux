import React from 'react'
import { Outlet } from 'react-router-dom';
import images from '../assets/images/auth_bck.png';
const Auth = () => {
  console.log(`Auth`);
  return (
    <div className="sm:grid 
    sm:grid-cols-5 gap-0 
    min-h-screen 
    min-w-screen">
    
      <div className={`
       hidden
       sm:block
       sm:col-span-3
       flex justify-center items-center
       min-h-screen min-w-screen
       bg-no-repeat bg-cover 
       opacity-90
      `}
      style={{ backgroundImage:"url(" + images + ")" }}>
            <div className='h-full w-full rounded-lg
            backdrop-opacity-5 backdrop-invert  flex justify-center items-center space-y-5
             flex-col
            bg-white/5 p-10'>
                <h2 className='text-2xl text-center text-white font-normal'>Welcome Back, Thanks for joining us</h2>
                <div>
                    <h4  className='text-lg text-center text-white font-normal'> India’s largest platform and service partner to the Mutual Fund industry</h4>
                    <p  className='text-sm text-center text-white font-normal'> 
                    We have catalysed the growth of the Indian Mutual Fund industry for over two decades with proprietary technology platform, digital applications and the most comprehensive range of services to emerge 
                    as the preferred partner for the industry’s leading asset managers
                    </p>
                </div>
               
            </div>
      </div>
      <div className='border-0 
      sm:col-span-2
      '>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth