import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import Sidebar from "../../ui/Sidebar";
import { useState } from "react";
import { useUserLoginMutation } from "../Api/userApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { useNavigate } from "react-router";

 
const Login=()=>{
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [userLogin,{isloading}] = useUserLoginMutation();

  const{handleChange,handleSubmit,values} = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: async (val)=>{
      try {
        const response = await userLogin(val).unwrap();
        dispatch(addUser(response));
        nav('/');
        toast.success('successfully login')
        

      } catch (error) {
        toast.error(error.data?.message);
      }
    }
  })

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (<>
  
<div className="bg-gray-800 flex">
<Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
<div>
    <div className="grid grid-cols-2 text-white pt-[150px] ">
      <div>
      
      </div>
     <Card color="transparent" shadow={false}>
     
      <form onSubmit={handleSubmit} className=" mb-16 w-80 max-w-screen-lg text-white sm:w-96">
        
        <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6"  className="-mb-3">
            Your Email
          </Typography>
          <Input 
          name="email"
          onChange={handleChange}
          value={values.email}
          type="email"
           color="white" 
          
            />
          <Typography variant="h6" color="white"  className="-mb-3">
            Password
          </Typography>
          
          <Input
          name='password'
          onChange={handleChange}
          value={values.password}
        
         color="white"
          type='password'
           
          />
        </div>
        <Button type='submit'  className="mt-6" fullWidth>
          Login
        </Button>
       <button className="ml-[130px] text-blue-400 my-8">Forgot Password?</button>
      </form>
    </Card>
    </div>
  
    </div>
    </div>
    </>
  );
}

export default Login;