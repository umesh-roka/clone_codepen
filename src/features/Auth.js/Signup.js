import { Button,Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useUserSignupMutation } from '../Api/userApi'
import Sidebar from '../../ui/Sidebar'

const Signup = () => {


  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };


  const [userSignup,{isloading}] = useUserSignupMutation();

  const {handleChange,handleSubmit,values} = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    onSubmit: async (val)=>{
      try {
        const response = await userSignup(val).unwrap();
        toast.success('signup successfully');
      } catch (err) {;

        console.log(err);
      }

    }
  })
  const nav = useNavigate();
  return (
    <div className='flex bg-gray-800'>
       <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />

    <div className='flex mx-[250px] py-10 '>
     

      <div color="transparent" shadow='false'>
      <Typography variant="h4" color="white">
        Enter your detail to Signup
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
    
        <Typography variant="h6" color="white" className="-mb-3">
            username
          </Typography>
          <Input
          name='username'
          onChange={handleChange}
          value={values.username}
           color='white'
  />
          <Typography variant="h6" color="white" className="-mb-3">
            Your Email
          </Typography>
          <Input
          name='email'
          onChange={handleChange}
          value={values.email}
           color='white'
  />
          <Typography variant="h6" color="white" className="-mb-3">
            Password
          </Typography>
          <Input
          name='password'
          onChange={handleChange}
          value={values.password}
          type='password'
           color='white'

          />
        </div>
        <Button type='submit' className="mt-6" fullWidth>
          Signup
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Already have an account? <button onClick={()=>nav('/login')}>login</button>
          
        </Typography>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Signup
