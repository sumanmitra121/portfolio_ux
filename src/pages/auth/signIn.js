import React, { useEffect } from 'react'
import TDInput from '../../components/TDInput';
import TDButton from '../../components/TDButton';
import TDCheckbox from '../../components/TDCheckbox';
import { Link } from 'react-router-dom';
import axios from "axios";
const SignIn = () => {
  
   useEffect(() =>{
    fetchUser()
   },[])

   const fetchUser = () =>{
        axios.get('http://127.0.0.1:8000').then(res =>{
              console.log(res.json())
        })
   } 

  return (
    <div className="flex justify-around items-center w-full flex-col 
          h-full space-y-5">
      <div className='space-y-4 justify-center items-center 
            flex flex-col w-3/5'>
        <TDInput
          label={"Email"}
          placeholder={"Enter email"}
          desc={""}
        />

        <div className="w-full space-y-3">
          <TDInput
            label={"Password"}
            placeholder={"********"}
            desc={""}
          />
          <div className='w-full flex flex-row justify-between items-center'>
            <TDCheckbox label={"By clicking here, I state that I have read and understood the terms and conditions."} />
            {/* <Link className='text-sky-500 
            font-medium text-xs
            hover:underline 
            hover:decoration-solid
            '>Lost Password</Link> */}
          </div>
        </div>
        <TDButton btn_title={"SignIn"} />
      </div>
      <div className='space-y-5 '>
      <div className="py-3 flex items-center text-xs text-gray-400 
       before:flex-[1_1_0%] before:border-t  font-medium
      before:border-neutral-600 before:me-6 
      after:flex-[1_1_0%] after:border-t 
      after:border-neutral-600 after:ms-6 
      dark:text-gray-500 dark:before:border-gray-600 
      dark:after:border-gray-600">Or Signin With</div>

        <div className='flex flex-row justify-around items-center space-x-5'>
          <button type="button" className="text-white bg-neutral-500 bg-opacity-5 hover:bg-opacity-15
      focus:ring-0 
      focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1
       text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 
       dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
          </button>

          <button type="button" className="text-white bg-neutral-500 bg-opacity-5 focus:ring-0 
        focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 hover:bg-opacity-15
        text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
            </svg>
          </button>

          <button type="button" className="text-white bg-neutral-500 bg-opacity-5 focus:ring-0 
        focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 hover:bg-opacity-15
        text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
            </svg>
          </button>
        </div>

      </div>

      <div>
        <p className='text-sm'>Don't have an account? <Link className='text-sky-500 
            font-medium 
            hover:underline 
            hover:decoration-solid
            '>Sign Up</Link></p>
      </div>

    </div>
  )
}

export default SignIn